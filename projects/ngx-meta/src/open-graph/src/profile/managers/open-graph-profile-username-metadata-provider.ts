import { provideOpenGraphProfileManager } from '../utils/provide-open-graph-profile-manager'

/**
 * Manages the {@link OpenGraphProfile.username} metadata
 * @public
 */
export const provideOpenGraphProfileUsername = () =>
  provideOpenGraphProfileManager('username')
