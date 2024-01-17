import { Routes } from '@angular/router'
import { MetaSetByServiceComponent } from './meta-set-by-service/meta-set-by-service.component'
import { ROUTES } from '../../../cypress/fixtures/routes'
import { MetaSetByRouteComponent } from './meta-set-by-route/meta-set-by-route.component'
import { MetadataRouteData } from '@davidlj95/ngx-meta/routing'
import METADATA from '../../../cypress/fixtures/metadata.json'
import { MetaSetByRouteAndServiceComponent } from './meta-set-by-route-and-service/meta-set-by-route-and-service.component'

const metadataRouteData: MetadataRouteData = { meta: METADATA }

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
]
