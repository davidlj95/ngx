import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { OpenGraph } from './open-graph'

const KEY: keyof OpenGraph = 'description'

export const OPEN_GRAPH_DESCRIPTION_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider(KEY, { g: KEY })
