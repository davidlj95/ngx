import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseTwitterCardMetadata } from './base-twitter-card-metadata'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'

@Injectable()
export class ImageTwitterCardMetadata extends BaseTwitterCardMetadata<'image'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'image', globalName: 'image' })
  }

  set(value: TwitterCardMetadata['image']): void {
    this.metaService.set(
      new TwitterCardMetaProperty('image'),
      value?.url?.toString(),
    )
    this.metaService.set(
      new TwitterCardMetaProperty('image', 'alt'),
      value?.alt,
    )
  }
}
