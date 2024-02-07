import { NgModule } from '@angular/core'
import { provideNgxMetaOpenGraph } from './provide-ngx-meta-open-graph'

/**
 * Adds {@link https://ngx-meta.pages.dev/built-in-modules/open-graph/ | Open Graph module}
 * basic & optional metadata setters
 *
 * For standalone apps, use {@link provideNgxMetaOpenGraph} instead
 *
 * @public
 */
@NgModule({
  providers: [...provideNgxMetaOpenGraph()],
})
export class NgxMetaOpenGraphModule {}
