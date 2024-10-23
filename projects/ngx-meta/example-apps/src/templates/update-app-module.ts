import { Project } from 'ts-morph'
import { Log } from '../tools/index.js'
import { join } from 'path'
import {
  addImportsFromTemplateIntoSourceFile,
  mergeAppModuleProvidersWithTemplate,
} from '../typescript/index.js'
import { MODULE_TEMPLATES_DIR } from './module-templates-dir.js'

const APP_MODULE_TEMPLATE_FILENAME = 'app.module.template.ts'
const APP_MODULE_FILENAME = 'app.module.ts'

export async function updateAppModule(tsMorphProject: Project, appDir: string) {
  Log.step('Updating app module from template')
  const [appModuleTemplateFile, appModuleFile] = [
    join(MODULE_TEMPLATES_DIR, 'src', 'app', APP_MODULE_TEMPLATE_FILENAME),
    join(appDir, 'src', 'app', APP_MODULE_FILENAME),
  ].map((path) => tsMorphProject.addSourceFileAtPath(path))

  addImportsFromTemplateIntoSourceFile({
    destination: appModuleFile,
    template: appModuleTemplateFile,
  })
  mergeAppModuleProvidersWithTemplate({
    destination: appModuleFile,
    template: appModuleTemplateFile,
  })
  await appModuleFile.save()
}
