import { SemVer } from 'semver'
import { semverCoerceOrThrow, semverGte } from '../semver/index.js'

const ANGULAR_CLI_NEW_STANDALONE_DEFAULT_MIN_VERSION =
  semverCoerceOrThrow('v17')

export const isStandaloneDefaultForVersion = (angularCliVersion: SemVer) =>
  semverGte(angularCliVersion, ANGULAR_CLI_NEW_STANDALONE_DEFAULT_MIN_VERSION)
