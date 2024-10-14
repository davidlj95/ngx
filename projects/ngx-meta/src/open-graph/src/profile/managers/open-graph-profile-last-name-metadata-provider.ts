import { _withModuleManagerNameAttribute } from '@davidlj95/ngx-meta/core'
import { provideOpenGraphProfileManager } from '../utils/provide-open-graph-profile-manager'
import { OPEN_GRAPH_PROFILE_KEY } from '../utils/open-graph-profile-key'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'

/**
 * Manages the {@link OpenGraphProfile.lastName} metadata
 * @public
 */
export const OPEN_GRAPH_PROFILE_LAST_NAME_METADATA_PROVIDER =
  provideOpenGraphProfileManager(
    'lastName',
    _withModuleManagerNameAttribute(
      withOpenGraphPropertyAttribute(OPEN_GRAPH_PROFILE_KEY, 'last_name'),
    ),
  )
