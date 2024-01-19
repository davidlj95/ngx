import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ROUTES } from '../../../cypress/fixtures/routes'
import { MetaSetByServiceComponent } from './meta-set-by-service/meta-set-by-service.component'
import { MetaSetByRouteComponent } from './meta-set-by-route/meta-set-by-route.component'
import { MetaSetByRouteAndServiceComponent } from './meta-set-by-route-and-service/meta-set-by-route-and-service.component'
import { MetadataRouteData } from '@davidlj95/ngx-meta/routing'
import * as METADATA_JSON from '../../../cypress/fixtures/metadata.json'
import { MetaLateLoadedComponent } from './meta-late-loaded/meta-late-loaded.component'
import { provideNgxMetaMetadataLoader } from '@davidlj95/ngx-meta/core'
import {
  LATE_LOADED_METADATA_JSON,
  provideLateLoadedMetadata,
} from '../late-loaded-metadata'

const metadataRouteData: MetadataRouteData = { meta: METADATA_JSON }

const routes: Routes = [
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
    component: MetaLateLoadedComponent,
    data: { meta: LATE_LOADED_METADATA_JSON },
    providers: [provideLateLoadedMetadata(), provideNgxMetaMetadataLoader()],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
