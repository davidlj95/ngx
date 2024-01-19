import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  LATE_LOADED_METADATA_JSON,
  provideLateLoadedMetadata,
} from './late-loaded-metadata'
import { NgxMetaMetadataLoaderModule } from '@davidlj95/ngx-meta/core'
import { MetaLateLoadedComponent } from './meta-late-loaded.component'
import { JsonPipe } from '@angular/common'

@NgModule({
  declarations: [MetaLateLoadedComponent],
  imports: [
    JsonPipe,
    NgxMetaMetadataLoaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: MetaLateLoadedComponent,
        data: { meta: LATE_LOADED_METADATA_JSON },
      },
    ]),
  ],
  providers: [provideLateLoadedMetadata()],
})
export class MetaLateLoadedModule {}
