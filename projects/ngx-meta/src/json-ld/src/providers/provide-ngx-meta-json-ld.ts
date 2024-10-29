import { provideJsonLdInHead } from '../managers/provide-json-ld-in-head'
import { Provider } from '@angular/core'

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
export const provideNgxMetaJsonLd = (): Provider => provideJsonLdInHead()
