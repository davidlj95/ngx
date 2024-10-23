import { Log } from '../tools/index.js'
import {
  readPackageJsonInDir,
  writePackageJsonInDir,
} from '../package-json/index.js'

const BUILD_SSR_RUN_SCRIPT = 'build:ssr'
//👇 Since v17, this script name includes :{projectName} at the end
const SERVE_SSR_RUN_SCRIPT_PREFIX = 'serve:ssr'
const CI_BUILD_RUN_SCRIPT = 'ci:build'
const CI_SERVE_RUN_SCRIPT = 'ci:serve'
//👇 Keep in sync with `cypress.config.ts`
const SSR_PORT_ENV_VAR = 'PORT'
const SSR_SERVE_PORT = 4200
const BUILD_WITH_SOURCE_MAPS = 'ng build --source-map'

export async function addCiRunScripts(opts: {
  appDir: string
  appName: string
}) {
  // Builds with SSR + source maps
  Log.step('Adding build and serve common run scripts for CI/CD')
  const appPkgJson = await readPackageJsonInDir(opts.appDir)

  // Build script
  if (BUILD_SSR_RUN_SCRIPT in appPkgJson.scripts) {
    appPkgJson.scripts[CI_BUILD_RUN_SCRIPT] =
      `${BUILD_WITH_SOURCE_MAPS} && ng run ${opts.appName}:server`
  } else {
    appPkgJson.scripts[CI_BUILD_RUN_SCRIPT] = BUILD_WITH_SOURCE_MAPS
  }

  // Serve script
  const serveSsrRunScript = Object.keys(appPkgJson.scripts).find((runScript) =>
    runScript.startsWith(SERVE_SSR_RUN_SCRIPT_PREFIX),
  )
  if (!serveSsrRunScript) {
    throw new Error('Cannot find SSR run script for app')
  }
  appPkgJson.scripts[CI_SERVE_RUN_SCRIPT] =
    `export ${SSR_PORT_ENV_VAR}=${SSR_SERVE_PORT} && pnpm run ${serveSsrRunScript}`
  await writePackageJsonInDir(opts.appDir, appPkgJson)
}
