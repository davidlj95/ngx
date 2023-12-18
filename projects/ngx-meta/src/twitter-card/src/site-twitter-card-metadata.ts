import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseTwitterCardMetadata } from './base-twitter-card-metadata'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'
import { TwitterCardSiteId } from './twitter-card-site-id'
import { TwitterCardSiteUsername } from './twitter-card-site-username'

const KEY = 'site'

@Injectable()
export class SiteTwitterCardMetadata extends BaseTwitterCardMetadata<
  typeof KEY
> {
  constructor(private readonly metaService: MetaService) {
    super(KEY)
  }

  set(value: TwitterCardMetadata[typeof KEY]): void {
    this.metaService.set(
      new TwitterCardMetaProperty(KEY),
      (value as TwitterCardSiteUsername | undefined)?.username,
    )
    this.metaService.set(
      new TwitterCardMetaProperty(KEY, 'id'),
      (value as TwitterCardSiteId | undefined)?.id,
    )
  }
}
