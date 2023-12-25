import { ModuleWithProviders, NgModule } from '@angular/core'
import {
  DEFAULT_METADATA_STRATEGY_PROVIDER,
  ROUTING_INITIALIZER,
} from './provide-routing'

@NgModule()
export class RoutingModule {
  static forRoot(): ModuleWithProviders<RoutingModule> {
    return {
      ngModule: RoutingModule,
      providers: [DEFAULT_METADATA_STRATEGY_PROVIDER, ROUTING_INITIALIZER],
    }
  }
}
