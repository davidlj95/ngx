import { Project } from 'ts-morph'
import { findTsConfigFileOrExit } from '../typescript/index.js'
import {
  updateAppConfig,
  updateAppModule,
  updateMainToUseTypedAppComponent,
} from '../templates/index.js'

export async function updateAppConfigAndMain({
  appDir,
  standalone,
  typeSuffixes,
}: {
  appDir: string
  standalone: boolean
  typeSuffixes: boolean
}) {
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
  if (!typeSuffixes) {
    await updateMainToUseTypedAppComponent(tsMorphProject, appDir)
  }
}
