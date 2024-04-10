import { execa, execaSync } from 'execa'
import {
  getE2EAppsDir,
  getModuleTemplatesDir,
  getRelativeLibraryDistDir,
  getStandaloneTemplatesDir,
  isMain,
  Log,
} from './utils.js'
import { basename, join } from 'path'
import { cp, writeFile } from 'fs/promises'
import ts from 'typescript'

interface SampleApp {
  readonly name: string
  readonly version: string
  readonly angularCliNewArguments?: ReadonlyArray<string>
  readonly standalone: boolean
}

const SAMPLE_APPS = [
  {
    name: 'a17',
    version: '17',
    angularCliNewArguments: [
      '--ssr',
      '--standalone=true', // Default in v17, but to be explicit
    ],
    standalone: true,
  },
  {
    name: 'a16',
    version: '16',
    angularCliNewArguments: [
      '--standalone=false', // Default in v16, but to be explicit
    ],
    standalone: false,
  },
  {
    name: 'a15',
    version: '15',
    standalone: false, // No standalone CLI argument in v15
  },
] satisfies ReadonlyArray<SampleApp>

const SAMPLE_APPS_BY_NAME = new Map<string, SampleApp>(
  SAMPLE_APPS.map((sampleApp) => [sampleApp.name, sampleApp]),
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

async function generateSampleApp({
  sampleApp,
  baseAppDir,
  noCleanup,
}: GenerateSampleAppOptions) {
  Log.info(`Generating sample app`)

  if (baseAppDir) {
    Log.info('Using "%s" as base app', baseAppDir)
  } else {
    const tmpDir = await generateTmpDirAndRegisterCleanupCallback(
      noCleanup ? () => {} : cleanUpTmpDir,
    )
    baseAppDir = await generateAngularApp({
      name: sampleApp.name,
      version: sampleApp.version,
      extraArgs: sampleApp.angularCliNewArguments,
      dir: tmpDir,
    })
  }

  const appDir = await copyAppDirIntoProject(baseAppDir)
  await setHoistedNodeLinker(appDir)
  await installApp(appDir)
  try {
    await Promise.all([
      installLibrary(appDir),
      copyTemplates({ appDir, standalone: sampleApp.standalone }),
      configureAngularWorkspace(appDir),
      updateTsConfigToImportJsonFiles(appDir),
    ])
  } catch (error) {
    Log.error('Failed setting up app', error)
    process.exit(1)
  }
}

interface GenerateSampleAppOptions {
  readonly sampleApp: SampleApp
  readonly baseAppDir?: string
  readonly noCleanup?: boolean
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

async function generateAngularApp(opts: {
  name: string
  version: string
  extraArgs?: ReadonlyArray<string>
  dir: string
}): Promise<string> {
  Log.step('Generating Angular app using Angular CLI')
  const ngNewCommand = execa(
    'pnpm',
    [
      'dlx',
      `@angular/cli@${opts.version}`,
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
  const destination = join(getE2EAppsDir(), appDirName)
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

async function installLibrary(appDir: string) {
  Log.step('Installing (linking) library')
  const installCommand = execa('pnpm', ['add', getRelativeLibraryDistDir()], {
    cwd: appDir,
    all: true,
    env: { FORCE_COLOR: true.toString() },
  })
  Log.stream(installCommand.all)
  await installCommand
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

async function configureAngularWorkspace(appDir: string) {
  await disableAnalytics(appDir)
  await enablePreserveSymlinksCommand(appDir)
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

async function updateTsConfigToImportJsonFiles(appDir: string) {
  Log.step('Adding --resolve-json-module to Typescript config')
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
  ;(
    config.raw as { compilerOptions: ts.CompilerOptions }
  ).compilerOptions.resolveJsonModule = true
  // 👇 Not needed for Angular v17, given `esModuleInterop` is enabled there
  //    https://www.typescriptlang.org/tsconfig#allowSyntheticDefaultImports
  //    Adding it anyway to be sure
  ;(
    config.raw as { compilerOptions: ts.CompilerOptions }
  ).compilerOptions.allowSyntheticDefaultImports = true
  await writeFile(configFileName, JSON.stringify(config.raw, null, 2))
}

async function enablePreserveSymlinksCommand(appDir: string) {
  Log.step('Enabling preserve symlinks')
  const projectName = basename(appDir)
  const enablePreserveSymlinksCommand = execa(
    'pnpm',
    [
      'ng',
      'config',
      `projects.${projectName}.architect.build.options.preserveSymlinks`,
      true.toString(),
    ],
    {
      cwd: appDir,
      all: true,
      env: { FORCE_COLOR: true.toString() },
    },
  )
  Log.stream(enablePreserveSymlinksCommand.all)
}

const BASE_APP_DIR_ARG = '--base-app-dir'
const NO_CLEANUP = '--no-cleanup'

if (isMain(import.meta.url)) {
  await generateSampleApp(parseArgs(process.argv))
}

function parseArgs(argv: ReadonlyArray<string>): GenerateSampleAppOptions {
  let appName: string | null = null
  let baseAppDir: string | undefined
  let noCleanup: boolean = false
  for (const arg of argv) {
    if (arg.startsWith('/') || arg.startsWith('node')) {
      continue
    }
    if (arg.startsWith(BASE_APP_DIR_ARG)) {
      const [_, argValue] = arg.split('=')
      baseAppDir = argValue
      continue
    }
    if (arg === NO_CLEANUP) {
      noCleanup = true
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
  const sampleApp = SAMPLE_APPS_BY_NAME.get(appName)
  if (!sampleApp) {
    Log.error('Unknown sample app')
    printAppNamesAndExit()
    process.exit(1)
  }
  return {
    sampleApp,
    baseAppDir,
    noCleanup,
  }
}

function printUsageAndExit() {
  console.log(`
Usage: node create-sample-app.js APP_NAME
       [${BASE_APP_DIR_ARG}=APP_DIR] [${NO_CLEANUP}]

       ${BASE_APP_DIR_ARG} allows to use an already created Angular CLI app as base
       If not provided, a fresh new app will be created

       ${NO_CLEANUP} will not clean up generated base app dir upon process exit
       Useful to use the same base app dir later
  `)
  printAppNamesAndExit()
}

function printAppNamesAndExit() {
  Log.info('Known app names:')
  ;[...SAMPLE_APPS_BY_NAME.keys()].forEach((name) => Log.item(name))
  process.exit(1)
}