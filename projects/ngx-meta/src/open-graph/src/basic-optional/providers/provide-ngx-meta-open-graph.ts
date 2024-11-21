import { Provider } from '@angular/core'
import {
  provideOpenGraphDescription,
  provideOpenGraphImage,
  provideOpenGraphLocale,
  provideOpenGraphSiteName,
  provideOpenGraphTitle,
  provideOpenGraphType,
  provideOpenGraphUrl,
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
  provideOpenGraphTitle(),
  provideOpenGraphType(),
  provideOpenGraphImage(),
  provideOpenGraphUrl(),
  provideOpenGraphDescription(),
  provideOpenGraphLocale(),
  provideOpenGraphSiteName(),
]
