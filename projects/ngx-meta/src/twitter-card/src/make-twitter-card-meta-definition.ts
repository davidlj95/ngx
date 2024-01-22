import {
  KEY_ATTRIBUTE_PROPERTY,
  makeComposedKeyValMetaDefinition,
} from '@davidlj95/ngx-meta/core'

export const makeTwitterCardMetaDefinition = (...names: string[]) =>
  makeComposedKeyValMetaDefinition({ keyAttr: KEY_ATTRIBUTE_PROPERTY }, [
    'twitter',
    ...names,
  ])
