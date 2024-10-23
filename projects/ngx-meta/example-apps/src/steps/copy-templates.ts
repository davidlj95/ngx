import { Log } from '../tools/index.js'
import { cp } from 'fs/promises'
import {
  MODULE_TEMPLATES_DIR,
  STANDALONE_TEMPLATES_DIR,
} from '../templates/index.js'

export async function copyTemplates(opts: {
  appDir: string
  standalone: boolean
}) {
  const templatesDir = opts.standalone
    ? STANDALONE_TEMPLATES_DIR
    : MODULE_TEMPLATES_DIR
  Log.step(
    `Copying ${opts.standalone ? 'standalone' : 'module'} apps template files`,
  )
  Log.item(templatesDir)
  await cp(templatesDir, opts.appDir, {
    recursive: true,
    filter: (source) => !source.endsWith('.template.ts'),
  })
}
