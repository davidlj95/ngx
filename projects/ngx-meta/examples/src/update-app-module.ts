import { Project } from 'ts-morph'
import { getModuleTemplatesDir, Log } from './utils.js'
import { join } from 'path'
import { addImportsFromTemplateIntoSourceFile } from './add-imports-from-template-into-source-file.js'
import { addAppModuleFromTemplateIntoSourceFile } from './add-app-module-from-template-into-source-file.js'

export async function updateAppModule(tsMorphProject: Project, appDir: string) {
  Log.step('Updating app module from template')
  const APP_MODULE_TEMPLATE_FILENAME = 'app.module.template.ts'
  const APP_MODULE_FILENAME = 'app.module.ts'
  const appModuleTemplateFile = tsMorphProject.addSourceFileAtPath(
    join(getModuleTemplatesDir(), 'src', 'app', APP_MODULE_TEMPLATE_FILENAME),
  )
  const appModuleFile = tsMorphProject.addSourceFileAtPath(
    join(appDir, 'src', 'app', APP_MODULE_FILENAME),
  )
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
