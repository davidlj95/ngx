import { NgModule } from '@angular/core'
import { provideNgxMetaTwitterCard } from './provide-ngx-meta-twitter-card'

/**
 * Adds {@link https://ngx-meta.dev/built-in-modules/twitter-cards/ | Twitter Cards module}
 * metadata managers
 *
 * For standalone apps, use {@link provideNgxMetaTwitterCard} instead
 *
 * @public
 */
@NgModule({
  providers: [...provideNgxMetaTwitterCard()],
})
export class NgxMetaTwitterCardModule {}
