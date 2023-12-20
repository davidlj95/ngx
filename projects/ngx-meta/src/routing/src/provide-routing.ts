import {
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  Provider,
} from '@angular/core'
import { CurrentRouteDataMetadataStrategy } from './current-route-data-metadata-strategy'
import { MetadataRouteStrategy } from './metadata-route-strategy'
import { RouterListenerService } from './router-listener.service'

export const ROUTING_PROVIDERS: Provider[] = [
  CurrentRouteDataMetadataStrategy,
  {
    provide: MetadataRouteStrategy,
    useExisting: CurrentRouteDataMetadataStrategy,
  },
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: (routerListener: RouterListenerService) => {
      return () => {
        routerListener.listen()
      }
    },
    deps: [RouterListenerService],
  },
]

export function provideRouting(): EnvironmentProviders | Provider[] {
  return [...ROUTING_PROVIDERS]
}
