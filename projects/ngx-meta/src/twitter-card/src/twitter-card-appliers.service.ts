import { Injectable } from '@angular/core'
import { TwitterCard } from './twitter-card'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'
import { _MetadataAppliers, _MetaService } from '@davidlj95/ngx-meta/common'

@Injectable()
export class TwitterCardAppliersService
  implements _MetadataAppliers<TwitterCard>
{
  constructor(private readonly metaService: _MetaService) {}

  card(card: TwitterCard['card']): void {
    this.metaService.apply(TwitterCardMetaProperty.CARD, card)
  }

  site(site: TwitterCard['site']): void {
    this.metaService.apply(TwitterCardMetaProperty.SITE, site)
  }

  siteId(siteId: TwitterCard['siteId']): void {
    this.metaService.apply(TwitterCardMetaProperty.SITE_ID, siteId)
  }

  creator(creator: TwitterCard['creator']): void {
    this.metaService.apply(TwitterCardMetaProperty.CREATOR, creator)
  }

  creatorId(creatorId: TwitterCard['creatorId']): void {
    this.metaService.apply(TwitterCardMetaProperty.CREATOR_ID, creatorId)
  }

  description(description: TwitterCard['description']): void {
    this.metaService.apply(TwitterCardMetaProperty.DESCRIPTION, description)
  }

  title(title: TwitterCard['title']): void {
    this.metaService.apply(TwitterCardMetaProperty.TITLE, title)
  }

  image(image: TwitterCard['image']): void {
    if (image === null) {
      const imageProperties = TwitterCardMetaProperty.images()
      for (const property of imageProperties) {
        this.metaService.apply(property, null)
      }
      return
    }

    this.metaService.apply(
      TwitterCardMetaProperty.IMAGE,
      image?.url?.toString(),
    )
    this.metaService.apply(TwitterCardMetaProperty.IMAGE_ALT, image?.alt)
  }
}
