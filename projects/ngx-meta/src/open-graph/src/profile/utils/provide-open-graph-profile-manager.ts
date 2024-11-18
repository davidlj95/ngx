import {
  _provideNgxMetaModuleManager,
  _ProvideNgxMetaModuleManagerOptions,
  _withModuleManagerNameAttribute,
  withOptions,
} from '@davidlj95/ngx-meta/core'
import { OpenGraphProfile } from '../managers'
import { OPEN_GRAPH_KEY } from '../../utils/provide-open-graph-manager'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'
import { OPEN_GRAPH_PROFILE_KEY } from './open-graph-profile-key'

export const provideOpenGraphProfileManager = <
  Key extends keyof OpenGraphProfile,
>(
  key: Key,
  ...options: readonly _ProvideNgxMetaModuleManagerOptions<
    OpenGraphProfile[Key]
  >[]
) =>
  _provideNgxMetaModuleManager<OpenGraphProfile, Key>(
    key,
    [OPEN_GRAPH_KEY, OPEN_GRAPH_PROFILE_KEY],
    withOptions(
      _withModuleManagerNameAttribute(
        withOpenGraphPropertyAttribute(OPEN_GRAPH_PROFILE_KEY, key),
      ),
      ...options,
    ),
  )
