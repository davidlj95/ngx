import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseTwitterCardMetadata } from './base-twitter-card-metadata'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'
import { TwitterCardCreatorUsername } from './twitter-card-creator-username'
import { TwitterCardCreatorId } from './twitter-card-creator'

@Injectable()
export class CreatorTwitterCardMetadata extends BaseTwitterCardMetadata<'creator'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'creator' })
  }

  set(value: TwitterCardMetadata['creator']): void {
    this.metaService.set(
      new TwitterCardMetaProperty('creator'),
      (value as TwitterCardCreatorUsername | undefined)?.username,
    )
    this.metaService.set(
      new TwitterCardMetaProperty('creator', 'id'),
      (value as TwitterCardCreatorId | undefined)?.id,
    )
  }
}
