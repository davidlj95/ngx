import { Log } from './tools/index.js'
import {
  AngularCliVersion,
  getAvailableAngularCliVersionAliases,
  isAngularCliVersionAlias,
} from './angular/index.js'
import { CreateExampleAppOptions } from './create-example-app-options.js'

const BASE_APP_DIR_ARG = '--base-app-dir'
const NO_CLEANUP_ARG = '--no-cleanup'
const TMP_DIR_ARG = '--tmp-dir'

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
      baseAppDir = arg.split('=')[1]
      continue
    }
    if (arg === NO_CLEANUP_ARG) {
      noCleanup = true
      continue
    }
    if (arg.startsWith(TMP_DIR_ARG)) {
      tmpDir = arg.split('=')[1]
      continue
    }
    if (appCliAlias === null) {
      appCliAlias = arg
      continue
    }
    Log.error('Unknown argument', arg)
    printUsage()
    process.exit(1)
  }
  if (!appCliAlias || appCliAlias.length === 0) {
    Log.error(
      'No Angular CLI alias specified. Specify Angular CLI alias to use as first param',
    )
    printUsage()
    process.exit(1)
  }
  if (!isAngularCliVersionAlias(appCliAlias)) {
    Log.error('Angular CLI version alias "%s" is invalid. ', appCliAlias)
    printAvailableAngularCliAliases()
    process.exit(1)
  }
  const angularCliVersion = AngularCliVersion.fromAlias(appCliAlias)
  return {
    angularCliVersion,
    baseAppDir,
    noCleanup,
    tmpDir,
  }
}

function printUsage() {
  const scriptName = process.argv[1]
  console.log(`
Usage: node ${scriptName} ANGULAR_CLI_ALIAS
       [${BASE_APP_DIR_ARG}=APP_DIR] [${NO_CLEANUP_ARG}]
       [${TMP_DIR_ARG}=TMP_DIR]

       ANGULAR_CLI_ALIAS is one of the version aliases defined in Angular CLI versions
       file. Under "devDependencies" key. It will be used to select the specific
       Angular CLI version to use to create the Angular app

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
  printAvailableAngularCliAliases()
}

function printAvailableAngularCliAliases() {
  Log.info('Available Angular CLI aliases:')
  getAvailableAngularCliVersionAliases().forEach((name) => Log.item(name))
}
