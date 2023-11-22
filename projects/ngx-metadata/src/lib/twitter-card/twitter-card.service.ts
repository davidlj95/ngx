import { Inject, Injectable, Optional } from '@angular/core'
import { TwitterCard } from './twitter-card'
import { TwitterCardApplierService } from './twitter-card-applier.service'
import { TWITTER_CARD_DEFAULTS_TOKEN } from './twitter-card-defaults-token'
import { _DefaultsService, _MetadataApplier } from 'ngx-metadata/common'

@Injectable()
export class TwitterCardService implements _MetadataApplier<TwitterCard> {
  constructor(
    private readonly applier: TwitterCardApplierService,
    @Optional()
    @Inject(TWITTER_CARD_DEFAULTS_TOKEN)
    private readonly defaults: TwitterCard | null,
    private readonly defaultsService: _DefaultsService,
  ) {}

  public apply(metadata: TwitterCard): void {
    this.applier.apply(
      this.defaults
        ? this.defaultsService.resolve(metadata, this.defaults)
        : metadata,
    )
  }
}
