import { Provider } from '@angular/core'
import {
  OPEN_GRAPH_DESCRIPTION_METADATA_PROVIDER,
  OPEN_GRAPH_IMAGE_METADATA_PROVIDER,
  OPEN_GRAPH_LOCALE_METADATA_PROVIDER,
  OPEN_GRAPH_SITE_NAME_METADATA_PROVIDER,
  OPEN_GRAPH_TITLE_METADATA_PROVIDER,
  OPEN_GRAPH_TYPE_METADATA_PROVIDER,
  OPEN_GRAPH_URL_METADATA_PROVIDER,
} from '../managers'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/open-graph/ | Open Graph module}
 * basic and optional metadata managers.
 *
 * @remarks
 *
 * This is the standalone, recommended API. Using this API is preferred.
 * However, you may also use {@link NgxMetaOpenGraphModule} as the Angular module-based equivalent API.
 *
 * @public
 */
export const provideNgxMetaOpenGraph = (): Provider => [
  OPEN_GRAPH_TITLE_METADATA_PROVIDER,
  OPEN_GRAPH_TYPE_METADATA_PROVIDER,
  OPEN_GRAPH_IMAGE_METADATA_PROVIDER,
  OPEN_GRAPH_URL_METADATA_PROVIDER,
  OPEN_GRAPH_DESCRIPTION_METADATA_PROVIDER,
  OPEN_GRAPH_LOCALE_METADATA_PROVIDER,
  OPEN_GRAPH_SITE_NAME_METADATA_PROVIDER,
]
