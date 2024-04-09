import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgxMetaMetadataLoaderModule } from '@davidlj95/ngx-meta/core'
import { MetaLateLoadedComponent } from './meta-late-loaded.component'
import { JsonPipe } from '@angular/common'
import {
  CUSTOM_METADATA_JSON,
  provideCustomMetadataManager,
} from './provide-custom-metadata-manager'

@NgModule({
  declarations: [MetaLateLoadedComponent],
  imports: [
    JsonPipe,
    NgxMetaMetadataLoaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: MetaLateLoadedComponent,
        data: { meta: CUSTOM_METADATA_JSON },
      },
    ]),
  ],
  providers: [provideCustomMetadataManager()],
})
export class MetaLateLoadedModule {}
