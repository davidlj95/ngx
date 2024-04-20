import { Project } from 'ts-morph'
import { getModuleTemplatesDir, Log } from './utils.js'
import { join } from 'path'
import { addImportsFromTemplateIntoSourceFile } from './add-imports-from-template-into-source-file.js'
import { addAppModuleFromTemplateIntoSourceFile } from './add-app-module-from-template-into-source-file.js'

const APP_MODULE_TEMPLATE_FILENAME = 'app.module.template.ts'
const APP_MODULE_FILENAME = 'app.module.ts'

export async function updateAppModule(tsMorphProject: Project, appDir: string) {
  Log.step('Updating app module from template')
  const [appModuleTemplateFile, appModuleFile] = [
    join(getModuleTemplatesDir(), 'src', 'app', APP_MODULE_TEMPLATE_FILENAME),
    join(appDir, 'src', 'app', APP_MODULE_FILENAME),
  ].map((path) => tsMorphProject.addSourceFileAtPath(path))

  addImportsFromTemplateIntoSourceFile({
    destination: appModuleFile,
    template: appModuleTemplateFile,
  })
  addAppModuleFromTemplateIntoSourceFile({
    destination: appModuleFile,
    template: appModuleTemplateFile,
  })
  await appModuleFile.save()
}
