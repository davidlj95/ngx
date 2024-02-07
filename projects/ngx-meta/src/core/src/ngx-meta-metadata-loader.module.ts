import { NgModule } from '@angular/core'
import { METADATA_LOADER_PROVIDERS } from './metadata-loader-providers'

/**
 * Allows to load metadata modules after library has been initialized
 *
 * For standalone apps, use {@link provideNgxMetaMetadataLoader} instead
 *
 * @public
 */
@NgModule({
  providers: [...METADATA_LOADER_PROVIDERS],
})
export class NgxMetaMetadataLoaderModule {}
