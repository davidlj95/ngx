import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { GLOBAL_LOCALE } from '@davidlj95/ngx-meta/core'

export const OPEN_GRAPH_LOCALE_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider(GLOBAL_LOCALE, { g: GLOBAL_LOCALE })
