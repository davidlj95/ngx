import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'

export const OPEN_GRAPH_SITE_NAME_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider('siteName', {
    g: 'applicationName',
    p: 'site_name',
  })
