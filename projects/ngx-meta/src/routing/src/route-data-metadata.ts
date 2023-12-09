import {
  _FlatType,
  GlobalMetadata,
  MetadataValues,
} from '@davidlj95/ngx-meta/core'

export type RouteDataMetadata = _FlatType<{
  meta: GlobalMetadata | MetadataValues
}>
