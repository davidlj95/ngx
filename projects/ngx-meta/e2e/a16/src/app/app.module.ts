import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { JsonPipe, NgForOf } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { MetaSetByServiceComponent } from './meta-set-by-service/meta-set-by-service.component'
import { MetaSetByRouteComponent } from './meta-set-by-route/meta-set-by-route.component'
import { MetaSetByRouteAndServiceComponent } from './meta-set-by-route-and-service/meta-set-by-route-and-service.component'
import { NgxMetaCoreModule } from '@davidlj95/ngx-meta/core'
import * as DEFAULTS_JSON from '../../../cypress/fixtures/defaults.json'
import { NgxMetaRoutingModule } from '@davidlj95/ngx-meta/routing'
import { NgxMetaStandardModule } from '@davidlj95/ngx-meta/standard'
import {
  NgxMetaOpenGraphModule,
  NgxMetaOpenGraphProfileModule,
} from '@davidlj95/ngx-meta/open-graph'
import { NgxMetaTwitterCardsModule } from '@davidlj95/ngx-meta/twitter-cards'
import { NgxMetaJsonLdModule } from '@davidlj95/ngx-meta/json-ld'

@NgModule({
  declarations: [
    AppComponent,
    MetaSetByServiceComponent,
    MetaSetByRouteComponent,
    MetaSetByRouteAndServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgForOf,
    RouterOutlet,
    JsonPipe,
    NgxMetaCoreModule.forRoot({ defaults: DEFAULTS_JSON }),
    NgxMetaRoutingModule.forRoot(),
    NgxMetaStandardModule,
    NgxMetaOpenGraphModule,
    NgxMetaOpenGraphProfileModule,
    NgxMetaTwitterCardsModule,
    NgxMetaJsonLdModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
