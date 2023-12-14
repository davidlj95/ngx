import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseTwitterCardMetadata } from './base-twitter-card-metadata'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'

@Injectable()
export class TitleTwitterCardMetadata extends BaseTwitterCardMetadata<'title'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'title', globalName: 'title' })
  }

  set(value: TwitterCardMetadata['title']): void {
    this.metaService.set(new TwitterCardMetaProperty('title'), value)
  }
}
