import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { JsonPipe, NgForOf } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { AllMetaSetByServiceComponent } from './all-meta-set-by-service/all-meta-set-by-service.component'
import { AllMetaSetByRouteComponent } from './all-meta-set-by-route/all-meta-set-by-route.component'
import { MetaSetByRouteAndServiceComponent } from './meta-set-by-route-and-service/meta-set-by-route-and-service.component'
import {
  NgxMetaCoreModule,
  withNgxMetaBaseUrl,
  withNgxMetaDefaults,
} from '@davidlj95/ngx-meta/core'
import DEFAULTS_JSON from '@/e2e/cypress/fixtures/defaults.json'
import { NgxMetaRoutingModule } from '@davidlj95/ngx-meta/routing'
import { NgxMetaStandardModule } from '@davidlj95/ngx-meta/standard'
import {
  NgxMetaOpenGraphModule,
  NgxMetaOpenGraphProfileModule,
} from '@davidlj95/ngx-meta/open-graph'
import { NgxMetaTwitterCardModule } from '@davidlj95/ngx-meta/twitter-card'
import { NgxMetaJsonLdModule } from '@davidlj95/ngx-meta/json-ld'
import { OneMetaSetByServiceComponent } from './one-meta-set-by-service/one-meta-set-by-service.component'
import { UrlResolutionMetaComponent } from './url-resolution-meta/url-resolution-meta.component'
import { BASE_URL } from '@/e2e/cypress/fixtures/base-url'

@NgModule({
  declarations: [
    AppComponent,
    AllMetaSetByServiceComponent,
    AllMetaSetByRouteComponent,
    MetaSetByRouteAndServiceComponent,
    OneMetaSetByServiceComponent,
    UrlResolutionMetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgForOf,
    RouterOutlet,
    JsonPipe,
    NgxMetaCoreModule.forRoot(
      withNgxMetaDefaults(DEFAULTS_JSON),
      withNgxMetaBaseUrl(BASE_URL),
    ),
    NgxMetaRoutingModule.forRoot(),
    NgxMetaStandardModule,
    NgxMetaOpenGraphModule,
    NgxMetaOpenGraphProfileModule,
    NgxMetaTwitterCardModule,
    NgxMetaJsonLdModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
