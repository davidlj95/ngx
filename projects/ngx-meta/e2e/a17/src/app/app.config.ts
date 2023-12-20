import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideNgxMetaRouting } from '@davidlj95/ngx-meta/routing'
import { provideNgxMetaStandardMetadata } from '@davidlj95/ngx-meta/standard'
import { provideNgxMetaOpenGraphMetadata } from '@davidlj95/ngx-meta/open-graph'
import { provideNgxMetaOpenGraphProfileMetadata } from '@davidlj95/ngx-meta/open-graph-profile'
import { provideNgxMetaTwitterCardMetadata } from '@davidlj95/ngx-meta/twitter-card'
import { provideNgxMetaJsonLdMetadata } from '@davidlj95/ngx-meta/json-ld'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNgxMetaRouting(),
    provideNgxMetaStandardMetadata(),
    provideNgxMetaOpenGraphMetadata(),
    provideNgxMetaOpenGraphProfileMetadata(),
    provideNgxMetaTwitterCardMetadata(),
    provideNgxMetaJsonLdMetadata(),
  ],
}
