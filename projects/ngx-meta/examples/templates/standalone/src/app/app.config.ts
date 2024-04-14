import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import {
  provideNgxMetaCore,
  withNgxMetaDefaults,
} from '@davidlj95/ngx-meta/core'
import DEFAULTS_JSON from '../../../../../e2e/cypress/fixtures/defaults.json'
import { provideNgxMetaRouting } from '@davidlj95/ngx-meta/routing'
import { provideNgxMetaStandard } from '@davidlj95/ngx-meta/standard'
import {
  provideNgxMetaOpenGraph,
  provideNgxMetaOpenGraphProfile,
} from '@davidlj95/ngx-meta/open-graph'
import { provideNgxMetaTwitterCard } from '@davidlj95/ngx-meta/twitter-card'
import { provideNgxMetaJsonLd } from '@davidlj95/ngx-meta/json-ld'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNgxMetaCore(withNgxMetaDefaults(DEFAULTS_JSON)),
    provideNgxMetaRouting(),
    provideNgxMetaStandard(),
    provideNgxMetaOpenGraph(),
    provideNgxMetaOpenGraphProfile(),
    provideNgxMetaTwitterCard(),
    provideNgxMetaJsonLd(),
  ],
}
