import { PackageJson, writePackageJsonInDir } from '../package-json/index.js'
import {
  ANGULAR_CLI_VERSIONS,
  AngularCliVersionAlias,
} from '../angular/index.js'

export async function createPackageJsonWithAngularCli(
  cliVersionAlias: AngularCliVersionAlias,
  tmpDir: string,
) {
  const pkgJsonWithOnlyAngularCliDevDep: Pick<PackageJson, 'devDependencies'> =
    {
      ...ANGULAR_CLI_VERSIONS,
      devDependencies: {
        [cliVersionAlias]:
          ANGULAR_CLI_VERSIONS.devDependencies[cliVersionAlias],
      },
    }
  await writePackageJsonInDir(tmpDir, pkgJsonWithOnlyAngularCliDevDep)
}
