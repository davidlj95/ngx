import { Routes } from '@angular/router'
import { MetaSetByServiceComponent } from './meta-set-by-service/meta-set-by-service.component'
import { ROUTES } from '../../../cypress/fixtures/routes'
import { MetaSetByRouteComponent } from './meta-set-by-route/meta-set-by-route.component'
import { MetadataRouteData } from '@davidlj95/ngx-meta/routing'
import METADATA_JSON from '../../../cypress/fixtures/metadata.json'
import { MetaSetByRouteAndServiceComponent } from './meta-set-by-route-and-service/meta-set-by-route-and-service.component'
import { MetaLateLoaded } from './meta-late-loaded/meta-late-loaded.component'
import {
  LATE_LOADED_METADATA_JSON,
  provideLateLoadedMetadata,
} from '../late-loaded-metadata'
import { provideNgxMetaMetadataLoader } from '@davidlj95/ngx-meta/core'

const metadataRouteData: MetadataRouteData = { meta: METADATA_JSON }

export const routes: Routes = [
  {
    path: ROUTES.metaSetByService.path,
    component: MetaSetByServiceComponent,
  },
  {
    path: ROUTES.metaSetByRoute.path,
    component: MetaSetByRouteComponent,
    data: metadataRouteData,
  },
  {
    path: ROUTES.metaSetByRouteAndService.path,
    component: MetaSetByRouteAndServiceComponent,
    data: metadataRouteData,
  },
  {
    path: ROUTES.metaLateLoaded.path,
    component: MetaLateLoaded,
    data: { meta: LATE_LOADED_METADATA_JSON },
    providers: [provideLateLoadedMetadata(), provideNgxMetaMetadataLoader()],
  },
]
