import { ANGULAR_CLI_VERSIONS } from './angular-cli-versions.js'

export type AngularCliVersionAlias =
  keyof typeof ANGULAR_CLI_VERSIONS.devDependencies
