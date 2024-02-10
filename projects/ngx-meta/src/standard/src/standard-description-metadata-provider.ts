import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { _GLOBAL_DESCRIPTION } from '@davidlj95/ngx-meta/core'

export const STANDARD_DESCRIPTION_METADATA_PROVIDER =
  makeStandardMetadataProvider(_GLOBAL_DESCRIPTION, { g: _GLOBAL_DESCRIPTION })
