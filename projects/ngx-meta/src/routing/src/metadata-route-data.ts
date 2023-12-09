import {
  _FlatType,
  GlobalMetadata,
  MetadataValues,
} from '@davidlj95/ngx-meta/core'

export type MetadataRouteData = _FlatType<{
  meta: GlobalMetadata | MetadataValues
}>
