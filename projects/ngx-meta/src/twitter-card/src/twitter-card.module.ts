import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core'
import { TwitterCardService } from './twitter-card.service'
import { TwitterCardApplierService } from './twitter-card-applier.service'
import { TwitterCardAppliersService } from './twitter-card-appliers.service'
import { TwitterCard } from './twitter-card'
import { TWITTER_CARD_DEFAULTS } from './twitter-card-defaults'
import { TWITTER_CARD_DEFAULTS_TOKEN } from './twitter-card-defaults-token'
import { _makeForRootGuard } from '@davidlj95/ngx-meta/common'

const [FOR_ROOT_GUARD_TOKEN, FOR_ROOT_GUARD_PROVIDER] =
  _makeForRootGuard('TwitterCardModule')

@NgModule({
  providers: [
    TwitterCardService,
    TwitterCardApplierService,
    TwitterCardAppliersService,
  ],
})
export class TwitterCardModule {
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Optional() @Inject(FOR_ROOT_GUARD_TOKEN) guard: unknown,
  ) {}

  static forRoot(
    defaults: TwitterCard = TWITTER_CARD_DEFAULTS,
  ): ModuleWithProviders<TwitterCardModule> {
    return {
      ngModule: TwitterCardModule,
      providers: [
        {
          provide: TWITTER_CARD_DEFAULTS_TOKEN,
          useValue: defaults,
        },
        FOR_ROOT_GUARD_PROVIDER,
      ],
    }
  }
}
