import { NgModule } from '@angular/core'
import { provideNgxMetaJsonLd } from './provide-ngx-meta-json-ld'

/**
 * Adds {@link https://ngx-meta.pages.dev/built-in-modules/json-ld/ | JSON-LD module}
 * metadata managers
 *
 * For standalone apps, use {@link provideNgxMetaJsonLd} instead
 *
 * @public
 */
@NgModule({
  providers: [...provideNgxMetaJsonLd()],
})
export class NgxMetaJsonLdModule {}
