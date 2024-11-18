import {
  _composedMetadataName,
  withPropertyAttribute,
} from '@davidlj95/ngx-meta/core'

export const withOpenGraphPropertyAttribute = (
  ...propertyParts: readonly string[]
) => withPropertyAttribute(_composedMetadataName('og', ...propertyParts))
