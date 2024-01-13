import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'

const KEY: keyof Standard = 'description'

export const STANDARD_DESCRIPTION_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY, { g: KEY })
