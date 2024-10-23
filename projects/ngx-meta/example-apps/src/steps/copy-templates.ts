import { Log } from '../tools/index.js'
import { cp } from 'fs/promises'
import {
  getModuleTemplatesDir,
  getStandaloneTemplatesDir,
} from '../utils/index.js'

export async function copyTemplates(opts: {
  appDir: string
  standalone: boolean
}) {
  const templatesDir = opts.standalone
    ? getStandaloneTemplatesDir()
    : getModuleTemplatesDir()
  Log.step(
    `Copying ${opts.standalone ? 'standalone' : 'module'} apps template files`,
  )
  Log.item(templatesDir)
  await cp(templatesDir, opts.appDir, {
    recursive: true,
    filter: (source) => !source.endsWith('.template.ts'),
  })
}
