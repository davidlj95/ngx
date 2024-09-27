import { _RouteValuesService } from '@davidlj95/ngx-meta/core'
import { ENVIRONMENT_INITIALIZER, inject, ValueProvider } from '@angular/core'
import { NGX_META_ROUTE_STRATEGY } from './ngx-meta-route-strategy'
import { CURRENT_ROUTE_DATA_ROUTE_STRATEGY } from './current-route-data-strategy'
import { ROUTER_LISTENER } from './router-listener'

export const DEFAULT_METADATA_ROUTE_STRATEGY: ValueProvider = {
  provide: NGX_META_ROUTE_STRATEGY,
  useValue: CURRENT_ROUTE_DATA_ROUTE_STRATEGY,
}
export const ROUTING_PROVIDERS = [
  DEFAULT_METADATA_ROUTE_STRATEGY,
  _RouteValuesService,
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: () => inject(ROUTER_LISTENER).listen,
  },
]
