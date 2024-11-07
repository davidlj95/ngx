import { Log } from './tools/index.js'
import { parseArgs } from './parse-args.js'
import {
  addCiRunScripts,
  addLinkedLibrary,
  copyAppDirIntoProject,
  copyTemplates,
  createAngularApp,
  createPackageJsonWithAngularCli,
  disableAnalytics,
  generateTmpDirAndRegisterCleanupCallback,
  install,
  ngAddLibrary,
  setupSsr,
  updateAppModuleOrAppConfigFromTemplates,
  updateTsConfigToImportJsonFilesAndSetPathMappings,
} from './steps/index.js'
import { join } from 'path'
import { isStandaloneDefaultForVersion } from './angular/index.js'
import { isMain } from './utils/index.js'
import { CreateExampleAppOptions } from './create-example-app-options.js'

async function createExampleApp({
  angularCliVersion,
  baseAppDir,
  noCleanup,
  tmpDir,
}: CreateExampleAppOptions) {
  Log.info(`Creating example app`)
  const appName = angularCliVersion.alias
  if (baseAppDir) {
    Log.info('Using "%s" as base app', baseAppDir)
  } else {
    tmpDir ??= await generateTmpDirAndRegisterCleanupCallback(!noCleanup)
    await createPackageJsonWithAngularCli(angularCliVersion.alias, tmpDir)
    await install({ projectDir: tmpDir, what: 'Angular CLI' })
    baseAppDir = await createAngularApp({
      appName,
      dir: tmpDir,
      cliVersion: angularCliVersion.asSemVer,
    })
    const cliBinary = join('..', ANGULAR_CLI_BINARY_PATH)
    await disableAnalytics({ cliBinary, appDir: baseAppDir })
    await setupSsr({
      cliBinary,
      appDir: baseAppDir,
      cliVersion: angularCliVersion.asSemVer,
    })
  }

  const appDir = await copyAppDirIntoProject(baseAppDir)
  const standalone = isStandaloneDefaultForVersion(angularCliVersion.asSemVer)
  await Promise.all([
    (async (): Promise<void> => {
      await addLinkedLibrary(appDir)
      await addCiRunScripts({ appDir, appName })
    })(),
    copyTemplates({ appDir, standalone }),
    updateTsConfigToImportJsonFilesAndSetPathMappings(appDir),
  ])
  await install({ projectDir: appDir, what: 'app dependencies' })
  await ngAddLibrary(appDir)
  await updateAppModuleOrAppConfigFromTemplates(appDir, standalone)
}

export const ANGULAR_CLI_BINARY_PATH = join('node_modules', '.bin', 'ng')

if (isMain(import.meta.url)) {
  await createExampleApp(parseArgs(process.argv))
}
