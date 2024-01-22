import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { GLOBAL_DESCRIPTION } from '@davidlj95/ngx-meta/core'

export const STANDARD_DESCRIPTION_METADATA_PROVIDER =
  makeStandardMetadataProvider(GLOBAL_DESCRIPTION, { g: GLOBAL_DESCRIPTION })
