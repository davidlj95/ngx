import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'

/**
 * Manages the {@link OpenGraph."type"} metadata
 * @public
 */
export const OPEN_GRAPH_TYPE_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider('type')
