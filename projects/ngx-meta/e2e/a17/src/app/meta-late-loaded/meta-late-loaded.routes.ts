import { Routes } from '@angular/router'
import { MetaLateLoadedComponent } from './meta-late-loaded.component'
import {
  CUSTOM_METADATA_JSON,
  provideCustomMetadataManager,
} from './provide-custom-metadata-manager'
import { provideNgxMetaMetadataLoader } from '@davidlj95/ngx-meta/core'

export const META_LATE_LOADED_ROUTES: Routes = [
  {
    path: '',
    component: MetaLateLoadedComponent,
    data: { meta: CUSTOM_METADATA_JSON },
    providers: [provideCustomMetadataManager(), provideNgxMetaMetadataLoader()],
  },
]
