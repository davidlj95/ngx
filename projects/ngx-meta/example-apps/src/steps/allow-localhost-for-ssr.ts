import { Log } from '../tools/index.js'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { jsonToString } from '../utils/index.js'

const ANGULAR_JSON = 'angular.json'

export async function allowLocalhostForSsr(opts: {
  appDir: string
  appName: string
}) {
  Log.step(`Tweaking angular.json to allow localhost for SSR`)
  const angularJsonFilePath = join(opts.appDir, ANGULAR_JSON)
  const angularJson = JSON.parse(await readFile(angularJsonFilePath, 'utf8'))
  const projectJson = angularJson.projects[opts.appName]
  const buildOptions = projectJson.architect.build.options
  buildOptions.security = { allowedHosts: ['localhost'] }
  await writeFile(angularJsonFilePath, jsonToString(angularJson))
}
