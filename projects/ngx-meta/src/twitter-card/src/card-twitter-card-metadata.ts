import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseTwitterCardMetadata } from './base-twitter-card-metadata'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'

@Injectable()
export class CardTwitterCardMetadata extends BaseTwitterCardMetadata<'card'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'card' })
  }

  set(value: TwitterCardMetadata['card']): void {
    this.metaService.set(new TwitterCardMetaProperty('card'), value)
  }
}
