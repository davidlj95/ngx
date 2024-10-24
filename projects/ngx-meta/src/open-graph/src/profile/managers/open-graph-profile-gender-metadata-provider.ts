import { provideOpenGraphProfileManager } from '../utils/provide-open-graph-profile-manager'

/**
 * Manages the {@link OpenGraphProfile.gender} metadata
 * @public
 */
export const provideOpenGraphProfileGender = () =>
  provideOpenGraphProfileManager('gender')
