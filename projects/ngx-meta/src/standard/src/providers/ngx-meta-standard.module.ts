import { NgModule } from '@angular/core'
import { provideNgxMetaStandard } from './provide-ngx-meta-standard'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/standard/ | standard module}
 * metadata managers.
 *
 * Check out {@link provideNgxMetaStandard} for the standalone, recommended API.
 *
 * @public
 */
@NgModule({
  providers: provideNgxMetaStandard(),
})
export class NgxMetaStandardModule {}
