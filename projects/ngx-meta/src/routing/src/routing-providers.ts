import { _ROUTE_METADATA_STRATEGY } from '@davidlj95/ngx-meta/core'
import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core'
import { ROUTER_LISTENER } from './router-listener'
import { DEFAULT_ROUTE_METADATA_STRATEGY } from './default-route-metadata-strategy'

export const ROUTING_PROVIDERS = [
  {
    provide: _ROUTE_METADATA_STRATEGY,
    useExisting: DEFAULT_ROUTE_METADATA_STRATEGY,
  },
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: () => inject(ROUTER_LISTENER).listen,
  },
]
