import {
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  Provider,
  ValueProvider,
} from '@angular/core'
import { RouterListenerService } from './router-listener.service'
import { CURRENT_ROUTE_DATA_METADATA_ROUTE_STRATEGY } from './current-route-data-metadata-strategy'
import { METADATA_ROUTE_STRATEGY } from './metadata-route-strategy'

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
  provide: METADATA_ROUTE_STRATEGY,
  useValue: CURRENT_ROUTE_DATA_METADATA_ROUTE_STRATEGY,
}

export const ROUTING_PROVIDERS = [
  DEFAULT_METADATA_ROUTE_STRATEGY,
  ROUTING_INITIALIZER,
]

export const provideRouting = (): EnvironmentProviders | Provider[] =>
  ROUTING_PROVIDERS
