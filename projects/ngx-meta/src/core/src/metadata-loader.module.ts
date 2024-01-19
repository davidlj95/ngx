import { NgModule } from '@angular/core'
import { METADATA_LOADER_PROVIDERS } from './provide-metadata-loader'

@NgModule({
  providers: [...METADATA_LOADER_PROVIDERS],
})
export class MetadataLoaderModule {}
