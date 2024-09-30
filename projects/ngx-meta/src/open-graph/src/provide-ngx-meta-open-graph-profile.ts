import { Provider } from '@angular/core'
import { OPEN_GRAPH_PROFILE_FIRST_NAME_METADATA_PROVIDER } from './open-graph-profile-first-name-metadata-provider'
import { OPEN_GRAPH_PROFILE_LAST_NAME_METADATA_PROVIDER } from './open-graph-profile-last-name-metadata-provider'
import { OPEN_GRAPH_PROFILE_USERNAME_METADATA_PROVIDER } from './open-graph-profile-username-metadata-provider'
import { OPEN_GRAPH_PROFILE_GENDER_METADATA_PROVIDER } from './open-graph-profile-gender-metadata-provider'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/open-graph/ | Open Graph module}
 * profile metadata managers
 *
 * @remarks
 *
 * This is the standalone, recommended API. Using this API is preferred.
 * However, you may also use {@link NgxMetaOpenGraphProfileModule} as the Angular module-based equivalent API.
 *
 * @public
 */
export const provideNgxMetaOpenGraphProfile = (): Provider[] => [
  OPEN_GRAPH_PROFILE_FIRST_NAME_METADATA_PROVIDER,
  OPEN_GRAPH_PROFILE_LAST_NAME_METADATA_PROVIDER,
  OPEN_GRAPH_PROFILE_USERNAME_METADATA_PROVIDER,
  OPEN_GRAPH_PROFILE_GENDER_METADATA_PROVIDER,
]
