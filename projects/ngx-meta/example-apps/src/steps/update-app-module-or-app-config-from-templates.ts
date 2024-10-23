import { Project } from 'ts-morph'
import { findTsConfigFileOrExit } from '../typescript/index.js'
import { updateAppConfig, updateAppModule } from '../templates/index.js'

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
    ? await updateAppConfig(tsMorphProject, appDir)
    : await updateAppModule(tsMorphProject, appDir)
}
