import { makeComposedKeyValMetaDefinition } from '@davidlj95/ngx-meta/core'

export const makeTwitterCardMetaDefinition = (...names: string[]) =>
  makeComposedKeyValMetaDefinition({}, ['twitter', ...names])
