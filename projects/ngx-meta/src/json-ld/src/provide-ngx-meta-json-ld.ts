import { Provider } from '@angular/core'
import { JSON_LD_METADATA_PROVIDER } from './json-ld-metadata-provider'

/**
 * Adds {@link https://ngx-meta.pages.dev/built-in-modules/json-ld/ | JSON-LD module}
 * metadata setters
 *
 * For module-based apps, use {@link NgxMetaJsonLdModule} instead
 *
 * @public
 */
export const provideNgxMetaJsonLd = (): Provider[] => [
  JSON_LD_METADATA_PROVIDER,
]
