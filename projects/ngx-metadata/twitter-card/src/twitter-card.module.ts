import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core'
import { TwitterCardService } from './twitter-card.service'
import { TwitterCardApplierService } from './twitter-card-applier.service'
import { TwitterCardAppliersService } from './twitter-card-appliers.service'
import { _MetadataRouteStrategy } from 'ngx-metadata/routing'
import { TwitterCardGeneralMetadataListenerService } from './twitter-card-general-metadata-listener.service'
import { TwitterCardRouteStrategy } from './routing/twitter-card-route-strategy'
import { DefaultTwitterCardRouteStrategy } from './routing/default-twitter-card-route-strategy'
import { TwitterCard } from './twitter-card'
import { TWITTER_CARD_DEFAULTS } from './twitter-card-defaults'
import { TWITTER_CARD_DEFAULTS_TOKEN } from './twitter-card-defaults-token'
import { _makeForRootGuard } from 'ngx-metadata/common'

const [FOR_ROOT_GUARD_TOKEN, FOR_ROOT_GUARD_PROVIDER] = _makeForRootGuard(
  'TwitterCardModule',
  TwitterCardGeneralMetadataListenerService,
)

@NgModule({
  providers: [
    TwitterCardService,
    TwitterCardApplierService,
    TwitterCardAppliersService,
  ],
})
export class TwitterCardModule {
  constructor(
    twitterCardGeneralMetadataListenerService: TwitterCardGeneralMetadataListenerService,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Optional() @Inject(FOR_ROOT_GUARD_TOKEN) guard: unknown,
  ) {
    twitterCardGeneralMetadataListenerService.listen()
  }

  static forRoot(
    defaults: TwitterCard = TWITTER_CARD_DEFAULTS,
  ): ModuleWithProviders<TwitterCardModule> {
    return {
      ngModule: TwitterCardModule,
      providers: [
        TwitterCardGeneralMetadataListenerService,
        {
          provide: TWITTER_CARD_DEFAULTS_TOKEN,
          useValue: defaults,
        },
        {
          provide: TwitterCardRouteStrategy,
          useClass: DefaultTwitterCardRouteStrategy,
        },
        {
          provide: _MetadataRouteStrategy,
          useExisting: TwitterCardRouteStrategy,
          multi: true,
        },
        FOR_ROOT_GUARD_PROVIDER,
      ],
    }
  }
}
