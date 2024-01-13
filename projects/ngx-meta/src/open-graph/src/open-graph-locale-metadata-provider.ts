import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { OpenGraph } from './open-graph'

const key: keyof OpenGraph = 'locale'
export const OPEN_GRAPH_LOCALE_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider(key, { g: key })
