import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { _GLOBAL_TITLE } from '@davidlj95/ngx-meta/core'

/**
 * Manages the {@link OpenGraph.title} metadata
 * @public
 */
export const OPEN_GRAPH_TITLE_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  _GLOBAL_TITLE,
  { g: _GLOBAL_TITLE },
)
