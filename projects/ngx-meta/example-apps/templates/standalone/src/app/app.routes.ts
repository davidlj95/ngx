import { Routes } from '@angular/router'
import { AllMetaSetByServiceComponent } from './all-meta-set-by-service/all-meta-set-by-service.component'
import { ROUTES } from '@/e2e/cypress/fixtures/routes'
import { AllMetaSetByRouteComponent } from './all-meta-set-by-route/all-meta-set-by-route.component'
import ALL_METADATA_JSON from '@/e2e/cypress/fixtures/all-metadata.json'
import { MetaSetByRouteAndServiceComponent } from './meta-set-by-route-and-service/meta-set-by-route-and-service.component'
import { META_LATE_LOADED_ROUTES } from './meta-late-loaded/meta-late-loaded.routes'
import { NgxMetaRouteData } from '@davidlj95/ngx-meta/routing'
import { OneMetaSetByServiceComponent } from './one-meta-set-by-service/one-meta-set-by-service.component'
import { UrlResolutionMetaComponent } from './url-resolution-meta/url-resolution-meta.component'
import { Component } from '@angular/core'

const ngxMetaRouteData: NgxMetaRouteData = { meta: ALL_METADATA_JSON }

@Component({
  template: 'Navigate somewhere to see something!',
  standalone: true,
})
class EmptyComponent {}

export const routes: Routes = [
  {
    path: '',
    component: EmptyComponent,
    pathMatch: 'full',
  },
  {
    path: ROUTES.allMetaSetByService.path,
    component: AllMetaSetByServiceComponent,
  },
  {
    path: ROUTES.allMetaSetByRoute.path,
    component: AllMetaSetByRouteComponent,
    data: ngxMetaRouteData,
  },
  {
    path: ROUTES.metaSetByRouteAndService.path,
    component: MetaSetByRouteAndServiceComponent,
    data: ngxMetaRouteData,
  },
  {
    path: ROUTES.oneMetaSetByService.path,
    component: OneMetaSetByServiceComponent,
  },
  {
    path: ROUTES.metaLateLoaded.path,
    loadChildren: () => META_LATE_LOADED_ROUTES,
  },
  {
    path: ROUTES.urlResolutionMeta.path,
    component: UrlResolutionMetaComponent,
  },
]
