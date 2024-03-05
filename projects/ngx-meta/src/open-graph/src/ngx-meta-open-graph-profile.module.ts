import { NgModule } from '@angular/core'
import { provideNgxMetaOpenGraphProfile } from './provide-ngx-meta-open-graph-profile'

/**
 * Adds {@link https://ngx-meta.dev/built-in-modules/open-graph/ | Open Graph module}
 * profile metadata managers
 *
 * For standalone apps, use {@link provideNgxMetaOpenGraphProfile} instead
 *
 * @public
 */
@NgModule({
  providers: [...provideNgxMetaOpenGraphProfile()],
})
export class NgxMetaOpenGraphProfileModule {}
