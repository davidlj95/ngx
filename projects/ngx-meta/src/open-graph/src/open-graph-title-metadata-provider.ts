import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { GLOBAL_TITLE } from '@davidlj95/ngx-meta/core'

export const OPEN_GRAPH_TITLE_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  GLOBAL_TITLE,
  { g: GLOBAL_TITLE },
)
