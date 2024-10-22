import {
  ANGULAR_CLI_VERSIONS_PKG_JSON,
  AngularCliVersionAlias,
} from './angular-cli-versions.js'
import { writePackageJsonInDir } from './write-package-json-in-dir.js'

const DEV_DEPENDENCIES_KEY =
  'devDependencies' satisfies keyof typeof ANGULAR_CLI_VERSIONS_PKG_JSON

export async function createPackageJsonWithAngularCli(
  cliVersionAlias: AngularCliVersionAlias,
  tmpDir: string,
) {
  const pkgJsonWithOnlyAngularCliDevDep = {
    ...ANGULAR_CLI_VERSIONS_PKG_JSON,
    [DEV_DEPENDENCIES_KEY]: {
      [cliVersionAlias]:
        ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies[cliVersionAlias],
    },
  }
  await writePackageJsonInDir(tmpDir, pkgJsonWithOnlyAngularCliDevDep)
}
