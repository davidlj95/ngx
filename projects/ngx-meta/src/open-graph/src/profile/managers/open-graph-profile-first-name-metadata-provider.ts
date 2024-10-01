import { makeOpenGraphProfileMetadataProvider } from '../utils/make-open-graph-profile-metadata-provider'

/**
 * Manages the {@link OpenGraphProfile.firstName} metadata
 * @public
 */
export const OPEN_GRAPH_PROFILE_FIRST_NAME_METADATA_PROVIDER =
  makeOpenGraphProfileMetadataProvider('firstName', { p: 'first_name' })
