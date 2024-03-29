import { Provider } from '@angular/core'
import { OPEN_GRAPH_TITLE_METADATA_PROVIDER } from './open-graph-title-metadata-provider'
import { OPEN_GRAPH_TYPE_METADATA_PROVIDER } from './open-graph-type-metadata-provider'
import { OPEN_GRAPH_IMAGE_METADATA_PROVIDER } from './open-graph-image-metadata-provider'
import { OPEN_GRAPH_URL_METADATA_PROVIDER } from './open-graph-url-metadata-provider'
import { OPEN_GRAPH_DESCRIPTION_METADATA_PROVIDER } from './open-graph-description-metadata-provider'
import { OPEN_GRAPH_LOCALE_METADATA_PROVIDER } from './open-graph-locale-metadata-provider'
import { OPEN_GRAPH_SITE_NAME_METADATA_PROVIDER } from './open-graph-site-name-metadata-provider'

/**
 * Adds {@link https://ngx-meta.dev/built-in-modules/open-graph/ | Open Graph module}
 * basic & optional metadata managers
 *
 * For module-based apps, use {@link NgxMetaOpenGraphModule} instead
 *
 * @public
 */
export const provideNgxMetaOpenGraph = (): Provider[] => [
  OPEN_GRAPH_TITLE_METADATA_PROVIDER,
  OPEN_GRAPH_TYPE_METADATA_PROVIDER,
  OPEN_GRAPH_IMAGE_METADATA_PROVIDER,
  OPEN_GRAPH_URL_METADATA_PROVIDER,
  OPEN_GRAPH_DESCRIPTION_METADATA_PROVIDER,
  OPEN_GRAPH_LOCALE_METADATA_PROVIDER,
  OPEN_GRAPH_SITE_NAME_METADATA_PROVIDER,
]
