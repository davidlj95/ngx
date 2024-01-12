import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { OpenGraph } from './open-graph'

const KEY: keyof OpenGraph = 'title'

export const OPEN_GRAPH_TITLE_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  KEY,
  { g: KEY },
)
