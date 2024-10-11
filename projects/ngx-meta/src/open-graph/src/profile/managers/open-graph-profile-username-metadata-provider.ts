import { provideOpenGraphProfileManager } from '../utils/provide-open-graph-profile-manager'

/**
 * Manages the {@link OpenGraphProfile.username} metadata
 * @public
 */
export const OPEN_GRAPH_PROFILE_USERNAME_METADATA_PROVIDER =
  provideOpenGraphProfileManager('username')
