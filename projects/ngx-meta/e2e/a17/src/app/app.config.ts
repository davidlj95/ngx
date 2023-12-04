import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import {
  CoreModule,
  RoutingModule,
  StandardModule,
} from '@davidlj95/ngx-meta/experimental'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      CoreModule.withDefaults({}),
      StandardModule,
      RoutingModule.forRoot(),
    ),
  ],
}
