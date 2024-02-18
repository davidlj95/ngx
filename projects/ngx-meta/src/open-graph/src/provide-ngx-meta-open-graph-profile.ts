import { Provider } from '@angular/core'
import { OPEN_GRAPH_PROFILE_FIRST_NAME_METADATA_PROVIDER } from './open-graph-profile-first-name-metadata-provider'
import { OPEN_GRAPH_PROFILE_LAST_NAME_METADATA_PROVIDER } from './open-graph-profile-last-name-metadata-provider'
import { OPEN_GRAPH_PROFILE_USERNAME_METADATA_PROVIDER } from './open-graph-profile-username-metadata-provider'
import { OPEN_GRAPH_PROFILE_GENDER_METADATA_PROVIDER } from './open-graph-profile-gender-metadata-provider'

/**
 * Adds {@link https://ngx-meta.pages.dev/built-in-modules/open-graph/ | Open Graph module}
 * profile metadata managers
 *
 * For module-based apps, use {@link NgxMetaOpenGraphProfileModule} instead
 *
 * @public
 */
export const provideNgxMetaOpenGraphProfile = (): Provider[] => [
  OPEN_GRAPH_PROFILE_FIRST_NAME_METADATA_PROVIDER,
  OPEN_GRAPH_PROFILE_LAST_NAME_METADATA_PROVIDER,
  OPEN_GRAPH_PROFILE_USERNAME_METADATA_PROVIDER,
  OPEN_GRAPH_PROFILE_GENDER_METADATA_PROVIDER,
]
