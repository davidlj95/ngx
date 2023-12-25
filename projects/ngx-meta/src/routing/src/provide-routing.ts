import {
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  Provider,
} from '@angular/core'
import { CurrentRouteDataMetadataStrategy } from './current-route-data-metadata-strategy'
import { MetadataRouteStrategy } from './metadata-route-strategy'
import { RouterListenerService } from './router-listener.service'

export const DEFAULT_METADATA_STRATEGY_PROVIDER: Provider = {
  provide: MetadataRouteStrategy,
  useExisting: CurrentRouteDataMetadataStrategy,
}

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

export function provideRouting(): EnvironmentProviders | Provider[] {
  return [DEFAULT_METADATA_STRATEGY_PROVIDER, ROUTING_INITIALIZER]
}
