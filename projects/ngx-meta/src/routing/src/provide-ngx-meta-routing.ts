import { EnvironmentProviders, Provider } from '@angular/core'
import { ROUTING_PROVIDERS } from './routing-providers'

/**
 * Allows to manage metadata of a page by specifying it in its Angular's
 * {@link https://angular.dev/api/router/Route#:~:text=a%20synchronous%20context.-,data,-Data | Route.data}
 *
 * For module-based apps, use {@link NgxMetaRoutingModule} instead
 *
 * @public
 */
export const provideNgxMetaRouting = (): EnvironmentProviders | Provider[] =>
  ROUTING_PROVIDERS
