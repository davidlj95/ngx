import { makeOpenGraphProfileMetadataProvider } from './make-open-graph-profile-metadata-provider'

/**
 * Manages the {@link OpenGraphProfile.lastName} metadata
 * @public
 */
export const OPEN_GRAPH_PROFILE_LAST_NAME_METADATA_PROVIDER =
  makeOpenGraphProfileMetadataProvider('lastName', { p: 'last_name' })
