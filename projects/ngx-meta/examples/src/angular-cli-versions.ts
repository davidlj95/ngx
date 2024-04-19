//👇 Type assertion needed to make Node.js happy
// https://stackoverflow.com/a/70106896/3263250
import ANGULAR_CLI_VERSIONS_PKG_JSON from '../angular-cli-versions.json' with { type: 'json' }
import { SemVer } from 'semver'
import { semverCoerceOrThrow } from './semver-coerce-or-throw.js'

export type AngularCliVersionAlias =
  keyof typeof ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies

export class AngularCliVersion {
  readonly asSemVer: SemVer

  constructor(public readonly alias: AngularCliVersionAlias) {
    const aliasValue = ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies[alias]
    this.asSemVer = semverCoerceOrThrow(
      aliasValue.replace('npm:@angular/cli@', ''),
    )
  }
}

export { ANGULAR_CLI_VERSIONS_PKG_JSON }
