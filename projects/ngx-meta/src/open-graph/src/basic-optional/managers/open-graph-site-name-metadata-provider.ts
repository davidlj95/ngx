import { makeOpenGraphMetadataProvider } from '../../utils/make-open-graph-metadata-provider'
import { _GLOBAL_APPLICATION_NAME } from '@davidlj95/ngx-meta/core'

/**
 * Manages the {@link OpenGraph.siteName} metadata
 * @public
 */
export const OPEN_GRAPH_SITE_NAME_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider('siteName', {
    g: _GLOBAL_APPLICATION_NAME,
    p: 'site_name',
  })
