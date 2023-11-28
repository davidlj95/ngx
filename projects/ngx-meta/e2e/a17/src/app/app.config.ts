import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { NgxMetaCommonModule } from '@davidlj95/ngx-meta/common'
import { NgxMetaGeneralModule } from '@davidlj95/ngx-meta/general-metadata'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NgxMetaCommonModule, NgxMetaGeneralModule.forRoot()),
  ],
}
