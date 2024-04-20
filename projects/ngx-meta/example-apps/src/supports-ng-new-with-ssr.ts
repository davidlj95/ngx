import { SemVer } from 'semver'
import { semverCoerceOrThrow } from './semver-coerce-or-throw.js'
import semverGte from 'semver/functions/gte.js'

const ANGULAR_CLI_NEW_SSR_MIN_VERSION = semverCoerceOrThrow('v17')

export function supportsNgNewWithSsr(angularCliVersion: SemVer) {
  return semverGte(angularCliVersion, ANGULAR_CLI_NEW_SSR_MIN_VERSION)
}
