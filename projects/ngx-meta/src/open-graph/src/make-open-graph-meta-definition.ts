import {
  KEY_ATTRIBUTE_PROPERTY,
  makeComposedKeyValMetaDefinition,
} from '@davidlj95/ngx-meta/core'

export const makeOpenGraphMetaDefinition = (...names: ReadonlyArray<string>) =>
  makeComposedKeyValMetaDefinition({ keyAttr: KEY_ATTRIBUTE_PROPERTY }, [
    'og',
    ...names,
  ])
