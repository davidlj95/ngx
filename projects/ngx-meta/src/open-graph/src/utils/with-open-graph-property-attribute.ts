import {
  _composedMetadataName,
  withPropertyAttribute,
} from '@davidlj95/ngx-meta/core'

export const withOpenGraphPropertyAttribute = (
  ...propertyNames: ReadonlyArray<string>
) => withPropertyAttribute(_composedMetadataName('og', ...propertyNames))
