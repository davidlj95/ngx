import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { _GLOBAL_TITLE } from '@davidlj95/ngx-meta/core'

export const OPEN_GRAPH_TITLE_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  _GLOBAL_TITLE,
  { g: _GLOBAL_TITLE },
)
