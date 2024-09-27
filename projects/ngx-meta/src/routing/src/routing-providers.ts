import { _RouteValuesService } from '@davidlj95/ngx-meta/core'
import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core'
import { ROUTER_LISTENER } from './router-listener'

export const ROUTING_PROVIDERS = [
  _RouteValuesService,
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: () => inject(ROUTER_LISTENER).listen,
  },
]
