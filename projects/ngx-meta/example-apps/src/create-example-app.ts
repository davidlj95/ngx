import { isMain, Log } from './utils.js'
import { CreateExampleAppOptions, parseArgs } from './parse-args.js'
import { generateTmpDirAndRegisterCleanupCallback } from './generate-tmp-dir-and-register-cleanup-callback.js'
import { createPackageJsonWithAngularCli } from './create-package-json-with-angular-cli.js'
import { install } from './install.js'
import { createAngularApp } from './create-angular-app.js'
import { join } from 'path'
import { ANGULAR_CLI_BINARY_PATH } from './constants.js'
import { disableAnalytics } from './disable-analytics.js'
import { setupSsr } from './setup-ssr.js'
import { copyAppDirIntoProject } from './copy-app-dir-into-project.js'
import { addLinkedLibrary } from './add-linked-library.js'
import { addCiRunScripts } from './add-ci-run-scripts.js'
import { copyTemplates } from './copy-templates.js'
import { updateTsConfigToImportJsonFilesAndSetPathMappings } from './update-ts-config-to-import-json-files-and-set-path-mappings.js'
import { updateAppModuleOrAppConfigFromTemplates } from './update-app-module-or-app-config-from-templates.js'
import { isStandaloneDefaultForVersion } from './is-standalone-default-for-version.js'
import { ngAddLibrary } from './ng-add-library.js'

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
      cliVersionSemver: angularCliVersion.asSemVer,
    })
    const cliBinary = join('..', ANGULAR_CLI_BINARY_PATH)
    await disableAnalytics({ cliBinary, appDir: baseAppDir })
    await setupSsr({
      cliBinary,
      appDir: baseAppDir,
      cliVersionSemVer: angularCliVersion.asSemVer,
    })
  }

  const appDir = await copyAppDirIntoProject(baseAppDir)
  const standalone = isStandaloneDefaultForVersion(angularCliVersion.asSemVer)
  await Promise.all([
    (async () => {
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

if (isMain(import.meta.url)) {
  await createExampleApp(parseArgs(process.argv))
}
