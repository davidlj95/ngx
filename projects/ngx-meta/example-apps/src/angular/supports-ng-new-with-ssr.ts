import { SemVer } from 'semver'
import { semverCoerceOrThrow, semverGte } from '../semver/index.js'

const ANGULAR_CLI_NEW_SSR_MIN_VERSION = semverCoerceOrThrow('v17')

export function supportsNgNewWithSsr(angularCliVersion: SemVer) {
  return semverGte(angularCliVersion, ANGULAR_CLI_NEW_SSR_MIN_VERSION)
}
