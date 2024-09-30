import { makeComposedKeyValMetaDefinition } from '@davidlj95/ngx-meta/core'

export const makeOpenGraphMetaDefinition = (...names: ReadonlyArray<string>) =>
  makeComposedKeyValMetaDefinition(['og', ...names], {
    keyAttr: 'property',
  })
