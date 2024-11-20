import { provideOpenGraphProfileManager } from '../utils/provide-open-graph-profile-manager'

/**
 * Manages the {@link OpenGraphProfile.gender} metadata
 * @public
 */
export const provideOpenGraphProfileGender = () =>
  provideOpenGraphProfileManager('gender')

/**
 * {@inheritDoc provideOpenGraphProfileGender}
 * @deprecated Use {@link provideOpenGraphProfileGender} instead
 * @public
 */
export const OPEN_GRAPH_PROFILE_GENDER_METADATA_PROVIDER =
  /* @__PURE__ */
  provideOpenGraphProfileGender()
