import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { GLOBAL_APPLICATION_NAME } from '@davidlj95/ngx-meta/core'

export const STANDARD_APPLICATION_NAME_METADATA_PROVIDER =
  makeStandardMetadataProvider(GLOBAL_APPLICATION_NAME, {
    g: GLOBAL_APPLICATION_NAME,
    n: 'application-name',
  })
