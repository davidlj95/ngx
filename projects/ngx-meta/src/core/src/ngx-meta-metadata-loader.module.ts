import { NgModule } from '@angular/core'

import { METADATA_LOADER_PROVIDERS } from './metadata-loader-providers'

@NgModule({
  providers: [...METADATA_LOADER_PROVIDERS],
})
export class NgxMetaMetadataLoaderModule {}
