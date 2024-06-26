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
    tmpDir ??= await generateTmpDirAndRegisterCleanupCallback(!noCleanup)
    await createPackageJsonWithAngularCli(exampleApp.cliVersion.alias, tmpDir)
    await install({ projectDir: tmpDir, what: 'Angular CLI' })
    baseAppDir = await createAngularApp({
      name: exampleApp.name,
      extraArgs: exampleApp.cliNewArguments,
      dir: tmpDir,
      cliVersionSemver: exampleApp.cliVersion.asSemVer,
    })
    const cliBinary = join('..', ANGULAR_CLI_BINARY_PATH)
    await disableAnalytics({ cliBinary, appDir: baseAppDir })
    await setupSsr({
      cliBinary,
      appDir: baseAppDir,
      cliVersionSemVer: exampleApp.cliVersion.asSemVer,
    })
  }

  const appDir = await copyAppDirIntoProject(baseAppDir)
  await Promise.all([
    (async () => {
      await addLinkedLibrary(appDir)
      await addCiRunScripts({ appDir, appName: exampleApp.name })
    })(),
    copyTemplates({ appDir, standalone: exampleApp.standalone }),
    updateTsConfigToImportJsonFilesAndSetPathMappings(appDir),
    updateAppModuleOrAppConfigFromTemplates(appDir, exampleApp.standalone),
  ])
  await install({ projectDir: appDir, what: 'app dependencies' })
}

if (isMain(import.meta.url)) {
  await createExampleApp(parseArgs(process.argv))
}
