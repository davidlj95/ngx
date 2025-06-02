import { semverCoerceOrThrow, semverLt } from '../semver/index.js'
import { SemVer } from 'semver'

const ANGULAR_CLI_NO_TYPE_SUFFIXES_MIN_VERSION = semverCoerceOrThrow('v20')

export const createdFilesHaveTypeSuffixesInVersion = (
  angularCliVersion: SemVer,
) => semverLt(angularCliVersion, ANGULAR_CLI_NO_TYPE_SUFFIXES_MIN_VERSION)
