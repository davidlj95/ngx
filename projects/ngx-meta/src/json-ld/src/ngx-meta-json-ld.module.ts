import { NgModule } from '@angular/core'
import { provideNgxMetaJsonLd } from './provide-ngx-meta-json-ld'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/json-ld/ | JSON-LD module}
 * metadata managers.
 *
 * Check out {@link provideNgxMetaJsonLd} for the standalone, recommended API.
 *
 * @public
 */
@NgModule({
  providers: provideNgxMetaJsonLd(),
})
export class NgxMetaJsonLdModule {}
