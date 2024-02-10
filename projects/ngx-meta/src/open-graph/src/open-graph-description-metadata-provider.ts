import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { _GLOBAL_DESCRIPTION } from '@davidlj95/ngx-meta/core'

/**
 * Manages the {@link OpenGraph.description} metadata
 * @public
 */
export const OPEN_GRAPH_DESCRIPTION_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider(_GLOBAL_DESCRIPTION, { g: _GLOBAL_DESCRIPTION })
