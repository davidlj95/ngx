import { execa, execaSync } from 'execa'
import {
  getAppsDir,
  getLibraryDistDir,
  getModuleTemplatesDir,
  getRelativeLibraryDistDir,
  getRelativeLibraryE2EDir,
  getStandaloneTemplatesDir,
  isMain,
  jsonToString,
  Log,
} from './utils.js'
import { basename, join } from 'path'
import { cp, readFile, writeFile } from 'fs/promises'
//👇 Type assertion needed to make Node.js happy
// https://stackoverflow.com/a/70106896/3263250
import ANGULAR_CLI_VERSIONS_PKG_JSON from '../angular-cli-versions.json' with { type: 'json' }
import ts from 'typescript'

interface ExampleApp {
  readonly name: string
  readonly version: string
  readonly angularCliNewArguments?: ReadonlyArray<string>
  readonly standalone: boolean
  readonly ssr: boolean
}

const EXAMPLE_APPS = [
  {
    name: 'a17',
    version: '17',
    angularCliNewArguments: [
      '--ssr',
      '--standalone=true', // Default in v17, but to be explicit
    ],
    ssr: true,
    standalone: true,
  },
  {
    name: 'a16',
    version: '16',
    angularCliNewArguments: [
      '--standalone=false', // Default in v16, but to be explicit
    ],
    ssr: false,
    standalone: false,
  },
  {
    name: 'a15',
    version: '15',
    ssr: false,
    standalone: false, // No standalone CLI argument in v15
  },
] satisfies ReadonlyArray<ExampleApp>

const EXAMPLE_APPS_BY_NAME = new Map<string, ExampleApp>(
  EXAMPLE_APPS.map((exampleApp) => [exampleApp.name, exampleApp]),
)

// https://angular.dev/cli/new
const DEFAULT_ANGULAR_CLI_NEW_ARGUMENTS = [
  '--inline-style',
  '--minimal',
  '--package-manager=pnpm',
  '--routing',
  '--skip-git',
  '--skip-install',
  '--skip-tests',
  '--style=css',
]

async function createExampleApp({
  exampleApp,
  baseAppDir,
  noCleanup,
  tmpDir,
}: CreateExampleAppOptions) {
  Log.info(`Creating example app`)

  if (baseAppDir) {
    Log.info('Using "%s" as base app', baseAppDir)
  } else {
    const angularCliDevDepKey = await getAngularCliDevDepKey(exampleApp.version)
    if (!tmpDir) {
      tmpDir = await generateTmpDirAndRegisterCleanupCallback(
        noCleanup ? () => {} : cleanUpTmpDir,
      )
    }
    await createPackageJsonWithAngularCli(angularCliDevDepKey, tmpDir)
    await installCli(tmpDir)
    baseAppDir = await generateAngularApp({
      name: exampleApp.name,
      extraArgs: exampleApp.angularCliNewArguments,
      dir: tmpDir,
    })
  }

  const appDir = await copyAppDirIntoProject(baseAppDir)
  await Promise.all([
    addLinkedLibrary(appDir),
    setHoistedNodeLinker(appDir),
    updateTsConfigToImportJsonFilesAndSetPathMappings(appDir),
    copyTemplates({ appDir, standalone: exampleApp.standalone }),
  ])
  await installApp(appDir)
  await configureAngularWorkspace({
    appDir,
    appName: exampleApp.name,
    ssr: exampleApp.ssr,
  })
}

interface CreateExampleAppOptions {
  readonly exampleApp: ExampleApp
  readonly baseAppDir?: string
  readonly noCleanup?: boolean
  readonly tmpDir?: string
}

type AngularCliDevDepKey =
  keyof typeof ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies

async function getAngularCliDevDepKey(
  version: string,
): Promise<AngularCliDevDepKey> {
  const devDependencies = ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies
  const key = `a${version}`
  if (!(key in devDependencies)) {
    Log.error('Angular CLI pinned version not found: "%s"', version)
    process.exit(1)
  }
  return key as AngularCliDevDepKey
}

const DEV_DEPENDENCIES_KEY =
  'devDependencies' satisfies keyof typeof ANGULAR_CLI_VERSIONS_PKG_JSON
const PKG_JSON = 'package.json'

async function createPackageJsonWithAngularCli(
  angularCliDevDepKey: AngularCliDevDepKey,
  tmpDir: string,
) {
  const pkgJsonFile = join(tmpDir, PKG_JSON)
  const pkgJsonWithOnlyAngularCliDevDep = {
    ...ANGULAR_CLI_VERSIONS_PKG_JSON,
    [DEV_DEPENDENCIES_KEY]: {
      [angularCliDevDepKey]:
        ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies[angularCliDevDepKey],
    },
  }
  await writeFile(pkgJsonFile, jsonToString(pkgJsonWithOnlyAngularCliDevDep))
}

async function generateTmpDirAndRegisterCleanupCallback(
  cleanUpCallback: (tmpDir: string) => void,
): Promise<string> {
  const tmpDir = (await execa('mktemp', ['-d'])).stdout
  registerAbortAndExitCallback(() => cleanUpCallback(tmpDir))
  Log.debug('Temporary dir: "%s"', tmpDir)
  return tmpDir
}

// https://stackoverflow.com/a/14032965/3263250
function registerAbortAndExitCallback(cleanUpCallback: () => void) {
  //👇 Otherwise this prevents script from exiting
  // process.stdin.resume() // so the program will not close instantly

  process.on('exit', cleanUpCallback)
  // catches ctrl+c event
  process.on('SIGINT', () => {
    Log.info('SIGINT received')
    process.exit(2)
  })
  // catches "kill pid" (for example: nodemon restart)
  process.on('SIGUSR1', () => {
    Log.info('SIGUSR1 received')
    process.exit(2)
  })
  process.on('SIGUSR2', () => {
    Log.info('SIGUSR2 received')
    process.exit(2)
  })
  // catches uncaught exceptions
  process.on('uncaughtException', (error) => {
    Log.error('Uncaught exception')
    console.log(error)
    process.exit(3)
  })
}

// Must be sync as it's an exit handler
// https://stackoverflow.com/a/14032965/3263250
function cleanUpTmpDir(tmpDir: string) {
  Log.step('Cleanup')
  if (tmpDir != '' && tmpDir != '/') {
    Log.step('Deleting temporary dir')
    execaSync('rm', ['-rf', tmpDir])
  }
}

async function installCli(tmpDir: string) {
  Log.step('Installing Angular CLI')
  const installCommand = execa('pnpm', ['install'], {
    cwd: tmpDir,
    all: true,
    env: { FORCE_COLOR: true.toString() },
  })
  Log.stream(installCommand.all)
  await installCommand
}

async function generateAngularApp(opts: {
  name: string
  extraArgs?: ReadonlyArray<string>
  dir: string
}): Promise<string> {
  Log.step('Generating Angular app using Angular CLI')
  const ngNewCommand = execa(
    'pnpm',
    [
      'ng',
      `new`,
      `${opts.name}`,
      ...DEFAULT_ANGULAR_CLI_NEW_ARGUMENTS,
      ...(opts.extraArgs ?? []),
    ],
    { cwd: opts.dir, all: true, env: { FORCE_COLOR: true.toString() } },
  )
  Log.stream(ngNewCommand.all)
  await ngNewCommand
  Log.ok('Angular app created')
  return join(opts.dir, opts.name)
}

async function copyAppDirIntoProject(appDir: string) {
  Log.step('Copying app from into project')
  const appDirName = basename(appDir)
  const destination = join(getAppsDir(), appDirName)
  await cp(appDir, destination, { recursive: true })
  return destination
}

// https://stackoverflow.com/a/78268602/3263250
async function setHoistedNodeLinker(appDir: string) {
  Log.step('Configuring pnpm to use hoisted node linker')
  const appNpmRcFile = join(appDir, '.npmrc')
  await writeFile(appNpmRcFile, 'node-linker=hoisted')
}

async function installApp(appDir: string) {
  Log.step('Installing app dependencies')
  const installCommand = execa('pnpm', ['install'], {
    cwd: appDir,
    all: true,
    env: { FORCE_COLOR: true.toString() },
  })
  Log.stream(installCommand.all)
  await installCommand
}

/**
 * Due to caching lockfile in CI/CD, cannot use `pnpm add/install`
 * because that would be run twice:
 * - When installing Angular deps (`pnpm i`)
 * - When installing the library (`pnpm add <libDir>`)
 * So the cached lockfile would include library, but then when running
 * `pnpm i` with cached lockfile, `specifiers` section would be out of sync
 * given lockfile contains library, but package.json does not (yet)
 * See https://github.com/davidlj95/ngx/pull/518
 */
async function addLinkedLibrary(appDir: string) {
  Log.step('Adding linked library')
  const appPkgJsonFile = join(appDir, PKG_JSON)
  const [libPkgJson, appPkgJson] = (
    await Promise.all([
      readFile(join(getLibraryDistDir(), PKG_JSON), 'utf8'),
      readFile(join(appDir, PKG_JSON), 'utf8'),
    ])
  ).map(
    (data) =>
      JSON.parse(data) as {
        name: string
        dependencies: Record<string, string>
      },
  )

  appPkgJson.dependencies[libPkgJson.name] =
    `link:${getRelativeLibraryDistDir()}`
  await writeFile(appPkgJsonFile, jsonToString(appPkgJson))
}

async function copyTemplates(opts: { appDir: string; standalone: boolean }) {
  const templatesDir = opts.standalone
    ? getStandaloneTemplatesDir()
    : getModuleTemplatesDir()
  Log.step(
    `Copying ${opts.standalone ? 'standalone' : 'module'} apps template files`,
  )
  Log.item(templatesDir)
  await cp(templatesDir, opts.appDir, { recursive: true })
}

async function updateTsConfigToImportJsonFilesAndSetPathMappings(
  appDir: string,
) {
  Log.step('Adding JSON imports and path mappings to Typescript config')
  const configFileName = ts.findConfigFile(appDir, ts.sys.fileExists)
  if (!configFileName) {
    Log.error('Cannot find Typescript config file')
    process.exit(1)
  }

  const configFile = ts.readConfigFile(configFileName, ts.sys.readFile)
  if (configFile.error) {
    Log.error('Unable to read Typescript config file', configFileName)
    process.exit(1)
  }
  const config = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    appDir,
  )
  type TsConfig = { compilerOptions: ts.CompilerOptions }
  const rawConfig = config.raw as TsConfig
  rawConfig.compilerOptions.resolveJsonModule = true
  // 👇 Not needed for Angular v17, given `esModuleInterop` is enabled there
  //    https://www.typescriptlang.org/tsconfig#allowSyntheticDefaultImports
  rawConfig.compilerOptions.allowSyntheticDefaultImports = true
  rawConfig.compilerOptions.paths = {
    '@/e2e/*': [join(getRelativeLibraryE2EDir(), '*')],
  }
  await writeFile(configFileName, jsonToString(config.raw))
}
async function configureAngularWorkspace(opts: {
  appDir: string
  appName: string
  ssr: boolean
}) {
  await disableAnalytics(opts.appDir)
  await enablePreserveSymlinksCommand(opts)
  await updateDistPathIfNeeded(opts)
}

async function disableAnalytics(appDir: string) {
  Log.step('Disabling Angular analytics')
  const disableAnalyticsCommand = execa(
    'pnpm',
    ['ng', 'config', 'cli.analytics', false.toString()],
    {
      cwd: appDir,
      all: true,
      env: { FORCE_COLOR: true.toString() },
    },
  )
  Log.stream(disableAnalyticsCommand.all)
  await disableAnalyticsCommand
}

async function enablePreserveSymlinksCommand(opts: {
  appDir: string
  appName: string
}) {
  Log.step('Enabling preserve symlinks')
  const enablePreserveSymlinksCommand = execa(
    'pnpm',
    [
      'ng',
      'config',
      `projects.${opts.appName}.architect.build.options.preserveSymlinks`,
      true.toString(),
    ],
    {
      cwd: opts.appDir,
      all: true,
      env: { FORCE_COLOR: true.toString() },
    },
  )
  Log.stream(enablePreserveSymlinksCommand.all)
  await enablePreserveSymlinksCommand
}

async function updateDistPathIfNeeded(opts: {
  appDir: string
  appName: string
  ssr: boolean
}) {
  if (opts.ssr) {
    Log.debug('Skipping build dir configuration update: SSR is enabled')
    return
  }

  Log.step('Configuring dist path as if SSR was there')
  const updateDistPathCommand = execa(
    'pnpm',
    [
      'ng',
      'config',
      `projects.${opts.appName}.architect.build.options.outputPath`,
      `dist/${opts.appName}/browser`,
    ],
    {
      cwd: opts.appDir,
      all: true,
      env: { FORCE_COLOR: true.toString() },
    },
  )
  Log.stream(updateDistPathCommand.all)
  await updateDistPathCommand
}

const BASE_APP_DIR_ARG = '--base-app-dir'
const NO_CLEANUP_ARG = '--no-cleanup'
const TMP_DIR_ARG = '--tmp-dir'

if (isMain(import.meta.url)) {
  await createExampleApp(parseArgs(process.argv))
}

function parseArgs(argv: ReadonlyArray<string>): CreateExampleAppOptions {
  let appName: string | null = null
  let baseAppDir: string | undefined
  let noCleanup: boolean = false
  let tmpDir: string | undefined
  for (const arg of argv) {
    if (arg.startsWith('/') || arg.startsWith('node')) {
      continue
    }
    if (arg.startsWith(BASE_APP_DIR_ARG)) {
      const [_, argValue] = arg.split('=')
      baseAppDir = argValue
      continue
    }
    if (arg === NO_CLEANUP_ARG) {
      noCleanup = true
      continue
    }
    if (arg.startsWith(TMP_DIR_ARG)) {
      const [_, argValue] = arg.split('=')
      tmpDir = argValue
      continue
    }
    if (appName === null) {
      appName = arg
      continue
    }
    Log.error('Unknown argument', arg)
    printUsageAndExit()
    process.exit(1)
  }
  if (!appName || appName.length === 0) {
    Log.error('No app name specified. Specify app name as first param')
    printUsageAndExit()
    process.exit(1)
  }
  const exampleApp = EXAMPLE_APPS_BY_NAME.get(appName)
  if (!exampleApp) {
    Log.error('Unknown example app')
    printAppNamesAndExit()
    process.exit(1)
  }
  return {
    exampleApp,
    baseAppDir,
    noCleanup,
    tmpDir,
  }
}

function printUsageAndExit() {
  const scriptName = process.argv[1]
  console.log(`
Usage: node ${scriptName} APP_NAME
       [${BASE_APP_DIR_ARG}=APP_DIR] [${NO_CLEANUP_ARG}]
       [${TMP_DIR_ARG}=TMP_DIR]

       ${BASE_APP_DIR_ARG} allows to use an already created Angular CLI app as base
       If not provided, a fresh new app will be created

       [${NO_CLEANUP_ARG}] will not clean up generated base app dir upon process exit
       Useful to use the same base app dir later. If using ${TMP_DIR_ARG}, no cleanup
       will happen anyway.

       [${TMP_DIR_ARG}=TMP_DIR] lets you set the temporary dir where Angular CLI will
       be installed and a new Angular app will be created. A "package.json" will be
       created there to install the CLI and allow caching lockfile + deps in CI/CD.
       Does nothing if ${BASE_APP_DIR_ARG} is used. Directory will not be cleaned up
       as wasn't created by the script (therefore implicitly enabling ${NO_CLEANUP_ARG})
  `)
  printAppNamesAndExit()
}

function printAppNamesAndExit() {
  Log.info('Known app names:')
  ;[...EXAMPLE_APPS_BY_NAME.keys()].forEach((name) => Log.item(name))
  process.exit(1)
}
