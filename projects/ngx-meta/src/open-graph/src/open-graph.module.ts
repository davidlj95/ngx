import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core'
import { OpenGraphService } from './open-graph.service'
import { OpenGraphApplierService } from './open-graph-applier.service'
import { OpenGraphAppliersService } from './open-graph-appliers.service'
import { DefaultOpenGraphRouteStrategy } from './routing/default-open-graph-route-strategy'
import { OpenGraphGeneralMetadataListenerService } from './open-graph-general-metadata-listener.service'
import { OpenGraphRouteStrategy } from './routing/open-graph-route-strategy'
import { OPEN_GRAPH_DEFAULTS } from './open-graph-defaults'
import { OpenGraph } from './open-graph'
import { OPEN_GRAPH_DEFAULTS_TOKEN } from './open-graph-defaults-token'
import { _MetadataRouteStrategy } from '@davidlj95/ngx-meta/routing'
import { _makeForRootGuard } from '@davidlj95/ngx-meta/common'

const [FOR_ROOT_GUARD_TOKEN, FOR_ROOT_GUARD_PROVIDER] =
  _makeForRootGuard('OpenGraphModule')

@NgModule({
  providers: [
    OpenGraphService,
    OpenGraphApplierService,
    OpenGraphAppliersService,
    OpenGraphGeneralMetadataListenerService,
  ],
})
export class OpenGraphModule {
  constructor(
    openGraphGeneralMetadataListenerService: OpenGraphGeneralMetadataListenerService,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Optional() @Inject(FOR_ROOT_GUARD_TOKEN) guard: unknown,
  ) {
    openGraphGeneralMetadataListenerService.listen()
  }

  static forRoot(
    defaults: OpenGraph = OPEN_GRAPH_DEFAULTS,
  ): ModuleWithProviders<OpenGraphModule> {
    return {
      ngModule: OpenGraphModule,
      providers: [
        {
          provide: OPEN_GRAPH_DEFAULTS_TOKEN,
          useValue: defaults,
        },
        {
          provide: OpenGraphRouteStrategy,
          useClass: DefaultOpenGraphRouteStrategy,
        },
        {
          provide: _MetadataRouteStrategy,
          useExisting: OpenGraphRouteStrategy,
          multi: true,
        },
        FOR_ROOT_GUARD_PROVIDER,
      ],
    }
  }
}
