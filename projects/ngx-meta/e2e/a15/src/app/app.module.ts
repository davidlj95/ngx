import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MetaSetByServiceComponent } from './meta-set-by-service/meta-set-by-service.component'
import { MetaSetByRouteComponent } from './meta-set-by-route/meta-set-by-route.component'
import { JsonPipe, NgForOf } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { NgxMetaRoutingModule } from '@davidlj95/ngx-meta/routing'
import { NgxMetaStandardModule } from '@davidlj95/ngx-meta/standard'
import { NgxMetaOpenGraphModule } from '@davidlj95/ngx-meta/open-graph'
import { NgxMetaOpenGraphProfileModule } from '@davidlj95/ngx-meta/open-graph-profile'
import { NgxMetaTwitterCardModule } from '@davidlj95/ngx-meta/twitter-card'
import { NgxMetaJsonLdModule } from '@davidlj95/ngx-meta/json-ld'

@NgModule({
  declarations: [
    AppComponent,
    MetaSetByServiceComponent,
    MetaSetByRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgForOf,
    RouterOutlet,
    NgxMetaRoutingModule.forRoot(),
    NgxMetaStandardModule,
    NgxMetaOpenGraphModule,
    NgxMetaOpenGraphProfileModule,
    NgxMetaTwitterCardModule,
    NgxMetaJsonLdModule,
    JsonPipe,
    JsonPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
