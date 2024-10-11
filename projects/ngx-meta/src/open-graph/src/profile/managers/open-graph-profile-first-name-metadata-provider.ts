import { _withModuleManagerNameAttribute } from '@davidlj95/ngx-meta/core'
import { provideOpenGraphProfileManager } from '../utils/provide-open-graph-profile-manager'
import { withOpenGraphProfilePropertyAttribute } from '../utils/with-open-graph-profile-property-attribute'

/**
 * Manages the {@link OpenGraphProfile.firstName} metadata
 * @public
 */
export const OPEN_GRAPH_PROFILE_FIRST_NAME_METADATA_PROVIDER =
  provideOpenGraphProfileManager(
    'firstName',
    _withModuleManagerNameAttribute(
      withOpenGraphProfilePropertyAttribute('first_name'),
    ),
  )
