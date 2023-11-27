import { Injectable } from '@angular/core'
import { TwitterCard } from './twitter-card'
import { TwitterCardType } from './twitter-card-type'
import { TwitterCardImage } from './twitter-card-image'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'
import {
  _MetaCommandService,
  _MetadataAppliers,
} from '@davidlj95/ngx-meta/common'

@Injectable()
export class TwitterCardAppliersService
  implements _MetadataAppliers<TwitterCard>
{
  constructor(private readonly metaCommandService: _MetaCommandService) {}

  card(card: TwitterCardType | undefined | null): void {
    this.metaCommandService.apply(TwitterCardMetaProperty.CARD, card)
  }

  site(site: string | undefined | null): void {
    this.metaCommandService.apply(TwitterCardMetaProperty.SITE, site)
  }

  siteId(siteId: string | undefined | null): void {
    this.metaCommandService.apply(TwitterCardMetaProperty.SITE_ID, siteId)
  }

  creator(creator: string | undefined | null): void {
    this.metaCommandService.apply(TwitterCardMetaProperty.CREATOR, creator)
  }

  creatorId(creatorId: string | undefined | null): void {
    this.metaCommandService.apply(TwitterCardMetaProperty.CREATOR_ID, creatorId)
  }

  description(description: string | undefined | null): void {
    this.metaCommandService.apply(
      TwitterCardMetaProperty.DESCRIPTION,
      description,
    )
  }

  title(title: string | undefined | null): void {
    this.metaCommandService.apply(TwitterCardMetaProperty.TITLE, title)
  }

  image(image: TwitterCardImage | undefined | null): void {
    if (image === null) {
      const imageProperties = TwitterCardMetaProperty.images()
      for (const property of imageProperties) {
        this.metaCommandService.apply(property, null)
      }
      return
    }

    this.metaCommandService.apply(
      TwitterCardMetaProperty.IMAGE,
      image?.url?.toString(),
    )
    this.metaCommandService.apply(TwitterCardMetaProperty.IMAGE_ALT, image?.alt)
  }
}
