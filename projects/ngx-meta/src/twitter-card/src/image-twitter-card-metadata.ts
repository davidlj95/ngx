import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseTwitterCardMetadata } from './base-twitter-card-metadata'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'

const KEY = 'image'

@Injectable()
export class ImageTwitterCardMetadata extends BaseTwitterCardMetadata<
  typeof KEY
> {
  constructor(private readonly metaService: MetaService) {
    super(KEY, KEY)
  }

  set(value: TwitterCardMetadata[typeof KEY]): void {
    this.metaService.set(
      new TwitterCardMetaProperty(KEY),
      value?.url?.toString(),
    )
    this.metaService.set(new TwitterCardMetaProperty(KEY, 'alt'), value?.alt)
  }
}
