import { ModuleWithProviders, NgModule } from '@angular/core'

import { ROUTING_PROVIDERS } from './routing-providers'

@NgModule()
export class NgxMetaRoutingModule {
  static forRoot(): ModuleWithProviders<NgxMetaRoutingModule> {
    return {
      ngModule: NgxMetaRoutingModule,
      providers: ROUTING_PROVIDERS,
    }
  }
}
