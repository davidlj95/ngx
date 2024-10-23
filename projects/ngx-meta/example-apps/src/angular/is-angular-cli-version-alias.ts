import {
  AngularCliVersionAlias,
  getAvailableAngularCliVersionAliases,
} from './index.js'

export const isAngularCliVersionAlias = (
  alias: string,
): alias is AngularCliVersionAlias =>
  getAvailableAngularCliVersionAliases().includes(
    alias as AngularCliVersionAlias,
  )
