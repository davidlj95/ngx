import { AngularCliVersionAlias } from './index.js'
import { ANGULAR_CLI_VERSIONS } from './angular-cli-versions.js'

export const getAvailableAngularCliVersionAliases =
  (): ReadonlyArray<AngularCliVersionAlias> =>
    Object.keys(
      ANGULAR_CLI_VERSIONS.devDependencies,
    ) as ReadonlyArray<AngularCliVersionAlias>
