import { NgModule } from '@angular/core'
import { provideNgxMetaOpenGraphProfile } from './provide-ngx-meta-open-graph-profile'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/open-graph/ | Open Graph module}
 * profile metadata managers.
 *
 * Check out {@link provideNgxMetaOpenGraphProfile} for the standalone, recommended API.
 *
 * @public
 */
@NgModule({
  providers: [provideNgxMetaOpenGraphProfile()],
})
export class NgxMetaOpenGraphProfileModule {}
