import { ModuleWithProviders, NgModule } from '@angular/core'

import { ROUTING_PROVIDERS } from './routing-providers'

/**
 * Allows to manage metadata of a page by specifying it in its Angular's
 * {@link https://angular.dev/api/router/Route#:~:text=a%20synchronous%20context.-,data,-Data | Route.data}
 *
 * @public
 */
@NgModule()
export class NgxMetaRoutingModule {
  static forRoot(): ModuleWithProviders<NgxMetaRoutingModule> {
    return {
      ngModule: NgxMetaRoutingModule,
      providers: ROUTING_PROVIDERS,
    }
  }
}
