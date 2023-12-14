import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { NgxMetaRoutingModule } from '@davidlj95/ngx-meta/routing'
import { NgxMetaStandardModule } from '@davidlj95/ngx-meta/standard'
import { NgxMetaOpenGraphModule } from '@davidlj95/ngx-meta/open-graph'
import { NgxMetaOpenGraphProfileModule } from '@davidlj95/ngx-meta/open-graph-profile'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NgxMetaRoutingModule.forRoot(),
      NgxMetaStandardModule,
      NgxMetaOpenGraphModule,
      NgxMetaOpenGraphProfileModule,
    ),
  ],
}
