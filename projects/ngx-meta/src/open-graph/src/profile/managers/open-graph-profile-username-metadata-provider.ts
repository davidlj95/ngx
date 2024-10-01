import { makeOpenGraphProfileMetadataProvider } from '../utils/make-open-graph-profile-metadata-provider'

/**
 * Manages the {@link OpenGraphProfile.username} metadata
 * @public
 */
export const OPEN_GRAPH_PROFILE_USERNAME_METADATA_PROVIDER =
  makeOpenGraphProfileMetadataProvider('username')
