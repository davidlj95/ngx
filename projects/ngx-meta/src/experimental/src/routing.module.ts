import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core'
import { RouterListenerService } from './router-listener.service'
import { _makeForRootGuard } from '@davidlj95/ngx-meta/common'
import { MetadataRouteStrategy } from './metadata-route-strategy'
import { CurrentRouteDataMetadataStrategy } from './current-route-data-metadata-strategy'
import { RouteMetadataValues } from './route-metadata-values'
import { CoreModule } from './core.module'

const [FOR_ROOT_GUARD_TOKEN, FOR_ROOT_GUARD_PROVIDER] = _makeForRootGuard(
  'MetadataRoutingModule',
  RouterListenerService,
)

@NgModule({
  providers: [CurrentRouteDataMetadataStrategy, RouteMetadataValues],
  imports: [CoreModule],
})
export class RoutingModule {
  constructor(
    routerListener: RouterListenerService,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Optional() @Inject(FOR_ROOT_GUARD_TOKEN) guard: unknown,
  ) {
    routerListener.listen()
  }

  public static forRoot(): ModuleWithProviders<RoutingModule> {
    return {
      ngModule: RoutingModule,
      providers: [
        RouterListenerService,
        FOR_ROOT_GUARD_PROVIDER,
        {
          provide: MetadataRouteStrategy,
          useExisting: CurrentRouteDataMetadataStrategy,
        },
      ],
    }
  }
}
