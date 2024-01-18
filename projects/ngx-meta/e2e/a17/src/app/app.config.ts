import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import {
  provideNgxMetaCore,
  withNgxMetaDefaults,
} from '@davidlj95/ngx-meta/core'
import DEFAULTS from '../../../cypress/fixtures/defaults.json'
import { provideNgxMetaRouting } from '@davidlj95/ngx-meta/routing'
import { provideNgxMetaStandardMetadata } from '@davidlj95/ngx-meta/standard'
import {
  provideNgxMetaOpenGraphMetadata,
  provideNgxMetaOpenGraphProfileMetadata,
} from '@davidlj95/ngx-meta/open-graph'
import { provideNgxMetaTwitterCardMetadata } from '@davidlj95/ngx-meta/twitter-card'
import { provideNgxMetaJsonLdMetadata } from '@davidlj95/ngx-meta/json-ld'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNgxMetaCore(withNgxMetaDefaults(DEFAULTS)),
    provideNgxMetaRouting(),
    provideNgxMetaStandardMetadata(),
    provideNgxMetaOpenGraphMetadata(),
    provideNgxMetaOpenGraphProfileMetadata(),
    provideNgxMetaTwitterCardMetadata(),
    provideNgxMetaJsonLdMetadata(),
  ],
}
