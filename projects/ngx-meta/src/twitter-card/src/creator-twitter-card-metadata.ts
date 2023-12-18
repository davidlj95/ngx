import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseTwitterCardMetadata } from './base-twitter-card-metadata'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'
import { TwitterCardCreatorUsername } from './twitter-card-creator-username'
import { TwitterCardCreatorId } from './twitter-card-creator'

const KEY = 'creator'

@Injectable()
export class CreatorTwitterCardMetadata extends BaseTwitterCardMetadata<
  typeof KEY
> {
  constructor(private readonly metaService: MetaService) {
    super(KEY)
  }

  set(value: TwitterCardMetadata[typeof KEY]): void {
    this.metaService.set(
      new TwitterCardMetaProperty(KEY),
      (value as TwitterCardCreatorUsername | undefined)?.username,
    )
    this.metaService.set(
      new TwitterCardMetaProperty(KEY, 'id'),
      (value as TwitterCardCreatorId | undefined)?.id,
    )
  }
}
