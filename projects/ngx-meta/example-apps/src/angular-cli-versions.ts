//👇 Type assertion needed to make Node.js happy
// https://stackoverflow.com/a/70106896/3263250
import ANGULAR_CLI_VERSIONS_PKG_JSON from './angular-cli-versions.json' with { type: 'json' }
import { SemVer } from 'semver'
import { semverCoerceOrThrow } from './semver-coerce-or-throw.js'

export type AngularCliVersionAlias =
  keyof typeof ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies

export class AngularCliVersion {
  private constructor(
    public readonly alias: AngularCliVersionAlias,
    public readonly asSemVer: SemVer,
  ) {}

  static fromAlias(alias: AngularCliVersionAlias): AngularCliVersion {
    return new AngularCliVersion(
      alias,
      semverCoerceOrThrow(
        ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies[alias].replace(
          'npm:@angular/cli@',
          '',
        ),
      ),
    )
  }
}

export const getAvailableAliases = (): ReadonlyArray<AngularCliVersionAlias> =>
  Object.keys(
    ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies,
  ) as ReadonlyArray<AngularCliVersionAlias>

export const isValidAngularCliVersionAlias = (
  alias: string,
): alias is AngularCliVersionAlias =>
  getAvailableAliases().includes(alias as AngularCliVersionAlias)

export { ANGULAR_CLI_VERSIONS_PKG_JSON }
