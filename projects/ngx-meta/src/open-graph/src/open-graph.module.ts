import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core'
import { OpenGraphService } from './open-graph.service'
import { OpenGraphApplierService } from './open-graph-applier.service'
import { OpenGraphAppliersService } from './open-graph-appliers.service'
import { OPEN_GRAPH_DEFAULTS } from './open-graph-defaults'
import { OpenGraph } from './open-graph'
import { OPEN_GRAPH_DEFAULTS_TOKEN } from './open-graph-defaults-token'
import { _makeForRootGuard } from '@davidlj95/ngx-meta/common'

const [FOR_ROOT_GUARD_TOKEN, FOR_ROOT_GUARD_PROVIDER] =
  _makeForRootGuard('OpenGraphModule')

@NgModule({
  providers: [
    OpenGraphService,
    OpenGraphApplierService,
    OpenGraphAppliersService,
  ],
})
export class OpenGraphModule {
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Optional() @Inject(FOR_ROOT_GUARD_TOKEN) guard: unknown,
  ) {}

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
        FOR_ROOT_GUARD_PROVIDER,
      ],
    }
  }
}
