import { Project } from 'ts-morph'
import { findTsConfigFileOrExit } from './find-ts-config-file-or-exit.js'
import { updateAppConfig } from './update-app-config.js'
import { updateAppModule } from './update-app-module.js'

export async function updateAppModuleOrAppConfigFromTemplates(
  appDir: string,
  standalone: boolean,
) {
  const tsMorphProject = new Project({
    tsConfigFilePath: await findTsConfigFileOrExit(appDir),
    skipAddingFilesFromTsConfig: true,
    skipFileDependencyResolution: true,
  })
  standalone
    ? await updateAppConfig(appDir)
    : await updateAppModule(tsMorphProject, appDir)
}
