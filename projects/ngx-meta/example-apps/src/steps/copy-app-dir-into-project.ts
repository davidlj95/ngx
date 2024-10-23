import { Log } from '../tools/index.js'
import { basename, join, resolve } from 'path'
import { cp } from 'fs/promises'
import { EXAMPLE_APPS_DIR } from '../utils/index.js'

const APPS_DIR = resolve(EXAMPLE_APPS_DIR, 'apps')

export async function copyAppDirIntoProject(appDir: string) {
  Log.step('Copying example app into project')
  const appDirName = basename(appDir)
  const destination = join(APPS_DIR, appDirName)
  await cp(appDir, destination, { recursive: true })
  return destination
}
