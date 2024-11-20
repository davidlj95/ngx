import { NgModule } from '@angular/core'
import { provideNgxMetaTwitterCard } from './provide-ngx-meta-twitter-card'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/twitter-cards/ | Twitter Cards module}
 * metadata managers.
 *
 * Check out {@link provideNgxMetaTwitterCard} for the standalone, recommended API.
 *
 * @public
 */
@NgModule({
  providers: [provideNgxMetaTwitterCard()],
})
export class NgxMetaTwitterCardModule {}
