import {
  Inject,
  InjectionToken,
  ModuleWithProviders,
  NgModule,
  Optional,
} from '@angular/core'
import { OpenGraphProfileApplierService } from './open-graph-profile-applier.service'
import { OpenGraphProfileRouteStrategy } from './routing/open-graph-profile-route-strategy'
import { OpenGraphProfile } from './open-graph-profile'
import { OPEN_GRAPH_PROFILE_DEFAULTS_TOKEN } from './open-graph-profile-defaults-token'
import { OpenGraphProfileAppliersService } from './open-graph-profile-appliers.service'
import { OpenGraphProfileService } from './open-graph-profile.service'
import { DefaultOpenGraphProfileRouteStrategy } from './routing/default-open-graph-profile-route-strategy'
import { _MetadataRouteStrategy } from '@davidlj95/ngx-meta/routing'
import { _makeForRootGuard } from '@davidlj95/ngx-meta/common'

const DUMMY_TOKEN = new InjectionToken<void>('Dummy token for guard')
const [FOR_ROOT_GUARD_TOKEN, FOR_ROOT_GUARD_PROVIDER] = _makeForRootGuard(
  'OpenGraphProfileModule',
  DUMMY_TOKEN,
)

@NgModule({
  providers: [
    OpenGraphProfileService,
    OpenGraphProfileApplierService,
    OpenGraphProfileAppliersService,
  ],
})
export class OpenGraphProfileModule {
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Optional() @Inject(FOR_ROOT_GUARD_TOKEN) guard: unknown,
  ) {}

  static forRoot(
    defaults: OpenGraphProfile = {},
  ): ModuleWithProviders<OpenGraphProfileModule> {
    return {
      ngModule: OpenGraphProfileModule,
      providers: [
        {
          provide: OPEN_GRAPH_PROFILE_DEFAULTS_TOKEN,
          useValue: defaults,
        },
        {
          provide: OpenGraphProfileRouteStrategy,
          useClass: DefaultOpenGraphProfileRouteStrategy,
        },
        {
          provide: _MetadataRouteStrategy,
          useExisting: OpenGraphProfileRouteStrategy,
          multi: true,
        },
        FOR_ROOT_GUARD_PROVIDER,
      ],
    }
  }
}
