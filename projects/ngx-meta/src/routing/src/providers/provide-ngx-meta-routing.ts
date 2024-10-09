import {
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core'
import { _routeMetadataStrategy } from '@davidlj95/ngx-meta/core'
import { DEFAULT_ROUTE_METADATA_STRATEGY } from '../route-metadata/default-route-metadata-strategy'
import { ROUTER_LISTENER } from '../listener/router-listener'

/**
 * Allows to manage metadata of a page by specifying it in its Angular
 * {@link https://angular.dev/api/router/Route#data | Route#data}
 *
 * @remarks
 *
 * This is the standalone, recommended API. Using this API is preferred.
 * However, you may also use {@link NgxMetaRoutingModule.(forRoot:1)} as the Angular module-based equivalent API.
 *
 * @public
 */
export const provideNgxMetaRouting = (): EnvironmentProviders =>
  makeEnvironmentProviders([
    {
      provide: _routeMetadataStrategy(),
      useExisting: DEFAULT_ROUTE_METADATA_STRATEGY,
    },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => inject(ROUTER_LISTENER).listen,
    },
  ])
