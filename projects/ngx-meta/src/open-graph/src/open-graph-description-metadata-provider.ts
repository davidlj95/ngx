import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { GLOBAL_DESCRIPTION } from '@davidlj95/ngx-meta/core'

export const OPEN_GRAPH_DESCRIPTION_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider(GLOBAL_DESCRIPTION, { g: GLOBAL_DESCRIPTION })
