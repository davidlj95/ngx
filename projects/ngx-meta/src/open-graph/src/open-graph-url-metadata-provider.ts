import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { _GLOBAL_CANONICAL_URL } from '@davidlj95/ngx-meta/core'

/**
 * Manages the {@link OpenGraph.url} metadata
 * @public
 */
export const OPEN_GRAPH_URL_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  'url',
  { g: _GLOBAL_CANONICAL_URL },
)
