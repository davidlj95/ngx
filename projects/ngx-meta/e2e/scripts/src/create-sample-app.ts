import { execa, execaSync } from 'execa'
import { getE2EDir, isMain, Log } from './utils.js'
import { join } from 'path'
import { cp } from 'fs/promises'

interface SampleApp {
  readonly name: string
  readonly version: string
  readonly angularCliNewArguments?: ReadonlyArray<string>
}

const SAMPLE_APPS = [
  {
    name: 'a17',
    version: '17',
    angularCliNewArguments: ['--ssr'],
  },
] satisfies ReadonlyArray<SampleApp>

const SAMPLE_APPS_BY_NAME = new Map<string, SampleApp>(
  SAMPLE_APPS.map((sampleApp) => [sampleApp.name, sampleApp]),
)

const DEFAULT_ANGULAR_CLI_NEW_ARGUMENTS = [
  '--inline-style',
  '--minimal',
  '--package-manager=pnpm',
  '--routing',
  '--skip-git',
  '--skip-tests',
  '--style=css',
]

async function generateSampleApp(sampleApp: SampleApp) {
  Log.info(`Generating sample app`)

  const tmpDir = await generateTmpDirAndRegisterCleanupCallbacks()
  const appDir = await generateAngularApp({
    name: sampleApp.name,
    version: sampleApp.version,
    extraArgs: sampleApp.angularCliNewArguments,
    dir: tmpDir,
  })
  await copyAppDirIntoProject(appDir)
}

async function generateTmpDirAndRegisterCleanupCallbacks(): Promise<string> {
  const tmpDir = (await execa('mktemp', ['-d'])).stdout
  registerAbortAndExitCallback(() => cleanUpTmpDir(tmpDir))
  Log.debug('Temporary dir: "%s"', tmpDir)
  return tmpDir
}

// https://stackoverflow.com/a/14032965/3263250
function registerAbortAndExitCallback(cleanUpCallback: () => void) {
  process.stdin.resume() // so the program will not close instantly

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
    Log.ok('Cleanup done')
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
  Log.step('Copying app from tmp dir into project')
  await cp(appDir, getE2EDir(), { recursive: true })
  Log.ok('Done copying')
}

if (isMain(import.meta.url)) {
  const appName = process.argv[2]
  if (!appName || appName.length === 0) {
    Log.error('No app name specified. Specify app name as first param')
    printAppNamesAndExit()
    process.exit(1)
  }
  const sampleApp = SAMPLE_APPS_BY_NAME.get(appName)
  if (!sampleApp) {
    Log.error('Unknown sample app')
    printAppNamesAndExit()
    process.exit(1)
  }
  if (appName) await generateSampleApp(sampleApp)
}

function printAppNamesAndExit() {
  Log.info('Known app names:')
  ;[...SAMPLE_APPS_BY_NAME.keys()].forEach((name) => Log.item(name))
  process.exit(1)
}
