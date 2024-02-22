import {
  _KEY_ATTRIBUTE_PROPERTY,
  makeComposedKeyValMetaDefinition,
} from '@davidlj95/ngx-meta/core'

export const makeOpenGraphMetaDefinition = (...names: ReadonlyArray<string>) =>
  makeComposedKeyValMetaDefinition(['og', ...names], {
    keyAttr: _KEY_ATTRIBUTE_PROPERTY,
  })
