import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseTwitterCardMetadata } from './base-twitter-card-metadata'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'
import { TwitterCardSiteId } from './twitter-card-site-id'
import { TwitterCardSiteUsername } from './twitter-card-site-username'

@Injectable()
export class SiteTwitterCardMetadata extends BaseTwitterCardMetadata<'site'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'site' })
  }

  set(value: TwitterCardMetadata['site']): void {
    this.metaService.set(
      new TwitterCardMetaProperty('site'),
      (value as TwitterCardSiteUsername | undefined)?.username,
    )
    this.metaService.set(
      new TwitterCardMetaProperty('site', 'id'),
      (value as TwitterCardSiteId | undefined)?.id,
    )
  }
}
