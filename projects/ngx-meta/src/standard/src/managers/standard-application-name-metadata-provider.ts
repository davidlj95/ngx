import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import { _GLOBAL_APPLICATION_NAME } from '@davidlj95/ngx-meta/core'

/**
 * Manages the {@link Standard.applicationName} metadata
 * @public
 */
export const STANDARD_APPLICATION_NAME_METADATA_PROVIDER =
  makeStandardMetadataProvider(_GLOBAL_APPLICATION_NAME, {
    g: _GLOBAL_APPLICATION_NAME,
    n: 'application-name',
  })
