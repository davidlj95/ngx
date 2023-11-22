import { Inject, Injectable, Optional } from '@angular/core'
import { TwitterCard } from './twitter-card'
import { MetadataApplier } from '../common/metadata-applier'
import { TwitterCardApplierService } from './twitter-card-applier.service'
import { TWITTER_CARD_DEFAULTS_TOKEN } from './twitter-card-defaults-token'
import { DefaultsService } from '../common/defaults.service'

@Injectable()
export class TwitterCardService implements MetadataApplier<TwitterCard> {
  constructor(
    private readonly applier: TwitterCardApplierService,
    @Optional()
    @Inject(TWITTER_CARD_DEFAULTS_TOKEN)
    private readonly defaults: TwitterCard | null,
    private readonly defaultsService: DefaultsService,
  ) {}

  public apply(metadata: TwitterCard): void {
    this.applier.apply(
      this.defaults
        ? this.defaultsService.resolve(metadata, this.defaults)
        : metadata,
    )
  }
}
