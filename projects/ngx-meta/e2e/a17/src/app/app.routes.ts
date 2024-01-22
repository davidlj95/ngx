import { Routes } from '@angular/router'
import { MetaSetByServiceComponent } from './meta-set-by-service/meta-set-by-service.component'
import { ROUTES } from '../../../cypress/fixtures/routes'
import { MetaSetByRouteComponent } from './meta-set-by-route/meta-set-by-route.component'
import METADATA_JSON from '../../../cypress/fixtures/metadata.json'
import { MetaSetByRouteAndServiceComponent } from './meta-set-by-route-and-service/meta-set-by-route-and-service.component'
import { META_LATE_LOADED_ROUTES } from './meta-late-loaded/meta-late-loaded.routes'
import { NgxMetaRouteData } from '@davidlj95/ngx-meta/routing'

const ngxMetaRouteData: NgxMetaRouteData = { meta: METADATA_JSON }

export const routes: Routes = [
  {
    path: ROUTES.metaSetByService.path,
    component: MetaSetByServiceComponent,
  },
  {
    path: ROUTES.metaSetByRoute.path,
    component: MetaSetByRouteComponent,
    data: ngxMetaRouteData,
  },
  {
    path: ROUTES.metaSetByRouteAndService.path,
    component: MetaSetByRouteAndServiceComponent,
    data: ngxMetaRouteData,
  },
  {
    path: ROUTES.metaLateLoaded.path,
    loadChildren: () => META_LATE_LOADED_ROUTES,
  },
]
