import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'

const KEY: keyof Standard = 'author'

export const STANDARD_AUTHOR_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY)
