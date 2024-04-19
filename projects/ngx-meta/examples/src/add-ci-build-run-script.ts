import { jsonToString, Log } from './utils.js'
import { join } from 'path'
import { PACKAGE_JSON } from './constants.js'
import { readFile, writeFile } from 'fs/promises'

export async function addCiBuildRunScript(opts: {
  appDir: string
  appName: string
}) {
  // Builds with SSR + source maps
  Log.step('Adding build run script for CI/CD')
  const appPkgJsonFile = join(opts.appDir, PACKAGE_JSON)
  const appPkgJson = JSON.parse(
    await readFile(join(opts.appDir, PACKAGE_JSON), 'utf8'),
  ) as {
    scripts: Record<string, string>
  }
  const BUILD_WITH_SOURCE_MAPS = 'ng build --source-map'
  if ('build:ssr' in appPkgJson.scripts) {
    appPkgJson.scripts['build:ci'] =
      `${BUILD_WITH_SOURCE_MAPS} && ng run ${opts.appName}:server`
  } else {
    appPkgJson.scripts['build:ci'] = BUILD_WITH_SOURCE_MAPS
  }
  await writeFile(appPkgJsonFile, jsonToString(appPkgJson))
}
