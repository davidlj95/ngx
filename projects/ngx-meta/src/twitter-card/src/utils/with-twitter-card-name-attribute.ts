import {
  _composedMetadataName,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'

export const withTwitterCardNameAttribute = (...nameParts: readonly string[]) =>
  withNameAttribute(_composedMetadataName('twitter', ...nameParts))
