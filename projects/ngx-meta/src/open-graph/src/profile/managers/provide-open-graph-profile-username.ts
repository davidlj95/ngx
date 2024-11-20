import { provideOpenGraphProfileManager } from '../utils/provide-open-graph-profile-manager'

/**
 * Manages the {@link OpenGraphProfile.username} metadata
 * @public
 */
export const provideOpenGraphProfileUsername = () =>
  provideOpenGraphProfileManager('username')

/**
 * {@inheritDoc provideOpenGraphProfileUsername}
 * @deprecated Use {@link provideOpenGraphProfileUsername} instead
 * @public
 */
export const OPEN_GRAPH_PROFILE_USERNAME_METADATA_PROVIDER =
  /* @__PURE__ */
  provideOpenGraphProfileUsername()
