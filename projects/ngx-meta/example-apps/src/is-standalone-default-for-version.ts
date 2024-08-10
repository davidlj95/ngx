import { SemVer } from 'semver'
import { semverCoerceOrThrow } from './semver-coerce-or-throw.js'
import semverGte from 'semver/functions/gte.js'

const ANGULAR_CLI_NEW_STANDALONE_DEFAULT_MIN_VERSION =
  semverCoerceOrThrow('v17')

export const isStandaloneDefaultForVersion = (angularCliVersion: SemVer) =>
  semverGte(angularCliVersion, ANGULAR_CLI_NEW_STANDALONE_DEFAULT_MIN_VERSION)
