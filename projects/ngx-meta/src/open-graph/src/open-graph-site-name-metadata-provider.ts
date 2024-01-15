import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { GLOBAL_APPLICATION_NAME } from '@davidlj95/ngx-meta/core'

export const OPEN_GRAPH_SITE_NAME_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider('siteName', {
    g: GLOBAL_APPLICATION_NAME,
    p: 'site_name',
  })
