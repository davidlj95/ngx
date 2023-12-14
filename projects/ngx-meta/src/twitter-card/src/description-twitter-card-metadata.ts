import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseTwitterCardMetadata } from './base-twitter-card-metadata'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'

@Injectable()
export class DescriptionTwitterCardMetadata extends BaseTwitterCardMetadata<'description'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'description', globalName: 'description' })
  }

  set(value: TwitterCardMetadata['description']): void {
    this.metaService.set(new TwitterCardMetaProperty('description'), value)
  }
}
