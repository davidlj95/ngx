import { join } from 'path'
import { writeFile } from 'fs/promises'
import { jsonToString } from './utils.js'
import { PACKAGE_JSON } from './constants.js'
import {
  ANGULAR_CLI_VERSIONS_PKG_JSON,
  AngularCliVersionAlias,
} from './angular-cli-versions.js'

const DEV_DEPENDENCIES_KEY =
  'devDependencies' satisfies keyof typeof ANGULAR_CLI_VERSIONS_PKG_JSON

export async function createPackageJsonWithAngularCli(
  cliVersionAlias: AngularCliVersionAlias,
  tmpDir: string,
) {
  const pkgJsonFile = join(tmpDir, PACKAGE_JSON)
  const pkgJsonWithOnlyAngularCliDevDep = {
    ...ANGULAR_CLI_VERSIONS_PKG_JSON,
    [DEV_DEPENDENCIES_KEY]: {
      [cliVersionAlias]:
        ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies[cliVersionAlias],
    },
  }
  await writeFile(pkgJsonFile, jsonToString(pkgJsonWithOnlyAngularCliDevDep))
}
