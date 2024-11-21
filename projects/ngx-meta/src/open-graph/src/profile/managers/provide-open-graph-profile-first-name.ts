import { _withModuleManagerNameAttribute } from '@davidlj95/ngx-meta/core'
import { provideOpenGraphProfileManager } from '../utils/provide-open-graph-profile-manager'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'
import { OPEN_GRAPH_PROFILE_KEY } from '../utils/open-graph-profile-key'

/**
 * Manages the {@link OpenGraphProfile.firstName} metadata
 * @public
 */
export const provideOpenGraphProfileFirstName = () =>
  provideOpenGraphProfileManager(
    'firstName',
    _withModuleManagerNameAttribute(
      withOpenGraphPropertyAttribute(OPEN_GRAPH_PROFILE_KEY, 'first_name'),
    ),
  )

/**
 * {@inheritDoc provideOpenGraphProfileFirstName}
 * @deprecated Use {@link provideOpenGraphProfileFirstName} instead
 * @public
 */
export const OPEN_GRAPH_PROFILE_FIRST_NAME_METADATA_PROVIDER =
  /* @__PURE__ */
  provideOpenGraphProfileFirstName()
