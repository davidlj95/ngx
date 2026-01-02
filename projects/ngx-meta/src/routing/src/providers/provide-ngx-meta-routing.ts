import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
} from '@angular/core'
import { DEFAULT_ROUTE_METADATA_STRATEGY_PROVIDER } from '../route-metadata/default-route-metadata-strategy'
import { routerListener } from '../listener/router-listener'

/**
 * Enables managing metadata of a page by specifying it in its Angular
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
    DEFAULT_ROUTE_METADATA_STRATEGY_PROVIDER,
    provideEnvironmentInitializer(() => {
      inject(routerListener()).listen()
    }),
  ])
