import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'

export const OPEN_GRAPH_URL_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  'url',
  { g: 'canonicalUrl' },
)
