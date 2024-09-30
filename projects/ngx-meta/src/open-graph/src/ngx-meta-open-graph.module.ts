import { NgModule } from '@angular/core'
import { provideNgxMetaOpenGraph } from './provide-ngx-meta-open-graph'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/open-graph/ | Open Graph module}
 * basic and optional metadata managers.
 *
 * Check out {@link provideNgxMetaOpenGraph} for the standalone, recommended API.
 *
 * @public
 */
@NgModule({
  providers: provideNgxMetaOpenGraph(),
})
export class NgxMetaOpenGraphModule {}
