import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'

const KEY: keyof Standard = 'applicationName'

export const STANDARD_APPLICATION_NAME_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY, { g: KEY, n: 'application-name' })
