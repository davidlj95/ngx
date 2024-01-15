import {
  ComposableMetaProperty,
  KEY_ATTRIBUTE_PROPERTY,
} from '@davidlj95/ngx-meta/core'

export const makeOpenGraphMetaProperty = (...names: string[]) =>
  new ComposableMetaProperty(
    { keyAttr: KEY_ATTRIBUTE_PROPERTY },
    ...['og', ...names],
  )
