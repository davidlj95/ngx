import { Routes } from '@angular/router'
import { MetaLateLoadedComponent } from './meta-late-loaded.component'
import {
  LATE_LOADED_METADATA_JSON,
  provideLateLoadedMetadata,
} from './late-loaded-metadata'
import { provideNgxMetaMetadataLoader } from '@davidlj95/ngx-meta/core'

export const META_LATE_LOADED_ROUTES: Routes = [
  {
    path: '',
    component: MetaLateLoadedComponent,
    data: { meta: LATE_LOADED_METADATA_JSON },
    providers: [provideLateLoadedMetadata(), provideNgxMetaMetadataLoader()],
  },
]
