import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ROUTES } from '@/e2e/cypress/fixtures/routes'
import { AllMetaSetByServiceComponent } from './all-meta-set-by-service/all-meta-set-by-service.component'
import { AllMetaSetByRouteComponent } from './all-meta-set-by-route/all-meta-set-by-route.component'
import { MetaSetByRouteAndServiceComponent } from './meta-set-by-route-and-service/meta-set-by-route-and-service.component'
import { NgxMetaRouteData } from '@davidlj95/ngx-meta/routing'
import ALL_METADATA_JSON from '@/e2e/cypress/fixtures/all-metadata.json'
import { MetaLateLoadedModule } from './meta-late-loaded/meta-late-loaded.module'
import { OneMetaSetByServiceComponent } from './one-meta-set-by-service/one-meta-set-by-service.component'
import { UrlResolutionMetaComponent } from './url-resolution-meta/url-resolution-meta.component'

const ngxMetaRouteData: NgxMetaRouteData = { meta: ALL_METADATA_JSON }

const routes: Routes = [
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
    loadChildren: () => MetaLateLoadedModule,
  },
  {
    path: ROUTES.urlResolutionMeta.path,
    component: UrlResolutionMetaComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
