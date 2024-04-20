import { Log } from './utils.js'
import { EXAMPLE_APPS, ExampleApp } from './example-app.js'

const BASE_APP_DIR_ARG = '--base-app-dir'
const NO_CLEANUP_ARG = '--no-cleanup'
const TMP_DIR_ARG = '--tmp-dir'

export const EXAMPLE_APPS_BY_CLI_ALIAS = new Map<string, ExampleApp>(
  EXAMPLE_APPS.map((exampleApp) => [exampleApp.cliVersion.alias, exampleApp]),
)

export interface CreateExampleAppOptions {
  readonly exampleApp: ExampleApp
  readonly baseAppDir?: string
  readonly noCleanup?: boolean
  readonly tmpDir?: string
}

export function parseArgs(
  argv: ReadonlyArray<string>,
): CreateExampleAppOptions {
  let appCliAlias: string | null = null
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
    if (appCliAlias === null) {
      appCliAlias = arg
      continue
    }
    Log.error('Unknown argument', arg)
    printUsageAndExit()
    process.exit(1)
  }
  if (!appCliAlias || appCliAlias.length === 0) {
    Log.error(
      'No Angular CLI alias specified. Specify Angular CLI alias to use as first param',
    )
    printUsageAndExit()
    process.exit(1)
  }
  const exampleApp = EXAMPLE_APPS_BY_CLI_ALIAS.get(appCliAlias)
  if (!exampleApp) {
    Log.error('Unknown example app')
    printAvailableAngularCLIAliasesAndExit()
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
Usage: node ${scriptName} ANGULAR_CLI_ALIAS
       [${BASE_APP_DIR_ARG}=APP_DIR] [${NO_CLEANUP_ARG}]
       [${TMP_DIR_ARG}=TMP_DIR]

       ANGULAR_CLI_ALIAS is one of the aliases defined in Angular CLI versions file
       "devDependencies" that will be used to create the Angular app

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
  printAvailableAngularCLIAliasesAndExit()
}

function printAvailableAngularCLIAliasesAndExit() {
  Log.info('Available Angular CLI aliases:')
  ;[...EXAMPLE_APPS_BY_CLI_ALIAS.keys()].forEach((name) => Log.item(name))
  process.exit(1)
}
