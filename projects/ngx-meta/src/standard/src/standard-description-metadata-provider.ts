import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import { GLOBAL_DESCRIPTION } from '@davidlj95/ngx-meta/core'

const KEY: keyof Standard = GLOBAL_DESCRIPTION

export const STANDARD_DESCRIPTION_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY, { g: KEY })
