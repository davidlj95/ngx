import { Provider } from '@angular/core'
import { JSON_LD_METADATA_PROVIDER } from '../managers'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/json-ld/ | JSON-LD module}
 * metadata managers.
 *
 * @remarks
 *
 * This is the standalone, recommended API. Using this API is preferred.
 * However, you may also use {@link NgxMetaJsonLdModule} as the Angular module-based equivalent API.
 *
 * @public
 */
export const provideNgxMetaJsonLd = (): Provider[] => [
  JSON_LD_METADATA_PROVIDER,
]
