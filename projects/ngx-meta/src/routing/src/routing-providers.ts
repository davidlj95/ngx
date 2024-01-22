import { _RouteMetadataValues } from '@davidlj95/ngx-meta/core'
import { ENVIRONMENT_INITIALIZER, Provider, ValueProvider } from '@angular/core'
import { RouterListenerService } from './router-listener.service'
import { NGX_META_ROUTE_STRATEGY } from './ngx-meta-route-strategy'
import { CURRENT_ROUTE_DATA_ROUTE_STRATEGY } from './current-route-data-strategy'

export const ROUTING_INITIALIZER: Provider = {
  provide: ENVIRONMENT_INITIALIZER,
  multi: true,
  useFactory: (routerListener: RouterListenerService) => {
    return () => {
      routerListener.listen()
    }
  },
  deps: [RouterListenerService],
}
export const DEFAULT_METADATA_ROUTE_STRATEGY: ValueProvider = {
  provide: NGX_META_ROUTE_STRATEGY,
  useValue: CURRENT_ROUTE_DATA_ROUTE_STRATEGY,
}
export const ROUTING_PROVIDERS = [
  DEFAULT_METADATA_ROUTE_STRATEGY,
  ROUTING_INITIALIZER,
  _RouteMetadataValues,
]
