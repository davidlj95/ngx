import { Log } from '../tools/index.js'
import { join } from 'path'
import {
  addAppConfigProvidersFromTemplateIntoSourceFile,
  addImportsFromTemplateIntoSourceFile,
} from '../typescript/index.js'
import { Project } from 'ts-morph'
import { getStandaloneTemplatesDir } from '../utils/index.js'

const APP_CONFIG_TEMPLATE_FILENAME = 'app.config.template.ts'
const APP_CONFIG_FILENAME = 'app.config.ts'

export async function updateAppConfig(tsMorphProject: Project, appDir: string) {
  Log.step('Updating app config from template')
  const [appConfigTemplateFile, appConfigFile] = [
    join(
      getStandaloneTemplatesDir(),
      'src',
      'app',
      APP_CONFIG_TEMPLATE_FILENAME,
    ),
    join(appDir, 'src', 'app', APP_CONFIG_FILENAME),
  ].map((path) => tsMorphProject.addSourceFileAtPath(path))

  addImportsFromTemplateIntoSourceFile({
    destination: appConfigFile,
    template: appConfigTemplateFile,
  })
  addAppConfigProvidersFromTemplateIntoSourceFile({
    destination: appConfigFile,
    template: appConfigTemplateFile,
  })
  await appConfigFile.save()
}
