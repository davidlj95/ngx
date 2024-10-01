import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import { _GLOBAL_DESCRIPTION } from '@davidlj95/ngx-meta/core'

/**
 * Manages the {@link Standard.description} metadata
 * @public
 */
export const STANDARD_DESCRIPTION_METADATA_PROVIDER =
  makeStandardMetadataProvider(_GLOBAL_DESCRIPTION, { g: _GLOBAL_DESCRIPTION })
