import { NgModule } from '@angular/core'
import { provideNgxMetaMetadataLoader } from './provide-ngx-meta-metadata-loader'

/**
 * Allows to load metadata modules after library has been initialized
 *
 * For standalone apps, use {@link provideNgxMetaMetadataLoader} instead
 *
 * @public
 */
@NgModule({
  providers: provideNgxMetaMetadataLoader(),
})
export class NgxMetaMetadataLoaderModule {}
