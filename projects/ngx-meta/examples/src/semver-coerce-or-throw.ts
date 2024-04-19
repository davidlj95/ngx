import { SemVer } from 'semver'
import semverCoerce from 'semver/functions/coerce.js'

export function semverCoerceOrThrow(version: string): SemVer {
  const semverVersion = semverCoerce(version)
  if (!semverVersion) {
    throw new Error(`Cannot coerce '${version}' into a semver version`)
  }
  return semverVersion
}
