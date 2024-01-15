import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { GLOBAL_CANONICAL_URL } from '@davidlj95/ngx-meta/core'

export const OPEN_GRAPH_URL_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  'url',
  { g: GLOBAL_CANONICAL_URL },
)
