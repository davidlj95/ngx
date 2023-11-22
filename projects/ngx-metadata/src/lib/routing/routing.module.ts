import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core'
import { RouterListenerService } from './router-listener.service'
import { _makeForRootGuard } from 'ngx-metadata/common'
import { CurrentRouteDataKeyPathMetadataStrategy } from './current-route-data-key-path-metadata-strategy'

const [FOR_ROOT_GUARD_TOKEN, FOR_ROOT_GUARD_PROVIDER] = _makeForRootGuard(
  'MetadataRoutingModule',
  RouterListenerService,
)

@NgModule({
  providers: [CurrentRouteDataKeyPathMetadataStrategy],
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
      providers: [RouterListenerService, FOR_ROOT_GUARD_PROVIDER],
    }
  }
}
