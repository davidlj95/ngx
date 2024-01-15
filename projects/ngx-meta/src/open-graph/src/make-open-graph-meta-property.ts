import {
  KEY_ATTRIBUTE_PROPERTY,
  makeComposedMetaProperty,
} from '@davidlj95/ngx-meta/core'

export const makeOpenGraphMetaProperty = (...names: string[]) =>
  makeComposedMetaProperty({ keyAttr: KEY_ATTRIBUTE_PROPERTY }, [
    'og',
    ...names,
  ])
