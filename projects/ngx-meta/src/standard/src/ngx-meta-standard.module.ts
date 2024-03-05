import { NgModule } from '@angular/core'
import { provideNgxMetaStandard } from './provide-ngx-meta-standard'

/**
 * Adds {@link https://ngx-meta.dev/built-in-modules/standard/ | standard module}
 * metadata managers
 *
 * For standalone apps, use {@link provideNgxMetaStandard} instead
 *
 * @public
 */
@NgModule({
  providers: [...provideNgxMetaStandard()],
})
export class NgxMetaStandardModule {}
