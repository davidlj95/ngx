import { makeStandardMetadataProvider } from './make-standard-metadata-provider'

/**
 * Manages the {@link Standard.author} metadata
 * @public
 */
export const STANDARD_AUTHOR_METADATA_PROVIDER =
  makeStandardMetadataProvider('author')
