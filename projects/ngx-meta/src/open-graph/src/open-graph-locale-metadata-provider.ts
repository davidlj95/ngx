import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { _GLOBAL_LOCALE } from '@davidlj95/ngx-meta/core'

export const OPEN_GRAPH_LOCALE_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider(_GLOBAL_LOCALE, { g: _GLOBAL_LOCALE })
