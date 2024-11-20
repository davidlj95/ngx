import { NgModule } from '@angular/core'
import { provideNgxMetaMetadataLoader } from './provide-ngx-meta-metadata-loader'

/**
 * Allows to load metadata managers after library has been initialized.
 *
 * Check out {@link provideNgxMetaMetadataLoader} for the standalone, recommended API.
 *
 * @public
 */
@NgModule({
  providers: [provideNgxMetaMetadataLoader()],
})
export class NgxMetaMetadataLoaderModule {}
