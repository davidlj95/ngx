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
  if (standalone) {
    await updateAppConfig(tsMorphProject, appDir)
  } else {
    await updateAppModule(tsMorphProject, appDir)
  }
}
