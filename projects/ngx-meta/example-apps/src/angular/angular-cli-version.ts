import { SemVer } from 'semver'
import { semverCoerceOrThrow } from '../semver/index.js'
import { AngularCliVersionAlias } from './angular-cli-version-alias.js'
import { ANGULAR_CLI_VERSIONS } from './angular-cli-versions.js'

export class AngularCliVersion {
  private constructor(
    public readonly alias: AngularCliVersionAlias,
    public readonly asSemVer: SemVer,
  ) {}

  static fromAlias(alias: AngularCliVersionAlias): AngularCliVersion {
    return new AngularCliVersion(
      alias,
      semverCoerceOrThrow(
        ANGULAR_CLI_VERSIONS.devDependencies[alias].replace(
          'npm:@angular/cli@',
          '',
        ),
      ),
    )
  }
}
