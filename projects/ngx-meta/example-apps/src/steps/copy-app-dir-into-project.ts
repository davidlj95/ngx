import { Log } from '../tools/index.js'
import { basename, join } from 'path'
import { cp } from 'fs/promises'
import { getAppsDir } from '../utils/index.js'

export async function copyAppDirIntoProject(appDir: string) {
  Log.step('Copying example app into project')
  const appDirName = basename(appDir)
  const destination = join(getAppsDir(), appDirName)
  await cp(appDir, destination, { recursive: true })
  return destination
}
