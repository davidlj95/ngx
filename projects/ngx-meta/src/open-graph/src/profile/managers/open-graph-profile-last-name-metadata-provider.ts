import { _withModuleManagerNameAttribute } from '@davidlj95/ngx-meta/core'
import { provideOpenGraphProfileManager } from '../utils/provide-open-graph-profile-manager'
import { withOpenGraphProfilePropertyAttribute } from '../utils/with-open-graph-profile-property-attribute'

/**
 * Manages the {@link OpenGraphProfile.lastName} metadata
 * @public
 */
export const OPEN_GRAPH_PROFILE_LAST_NAME_METADATA_PROVIDER =
  provideOpenGraphProfileManager(
    'lastName',
    _withModuleManagerNameAttribute(
      withOpenGraphProfilePropertyAttribute('last_name'),
    ),
  )
