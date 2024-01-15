import { ModuleWithProviders, NgModule } from '@angular/core'
import { ROUTING_PROVIDERS } from './provide-routing'

@NgModule()
export class RoutingModule {
  static forRoot(): ModuleWithProviders<RoutingModule> {
    return {
      ngModule: RoutingModule,
      providers: ROUTING_PROVIDERS,
    }
  }
}
