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
    this.metaCommandService.newApply(TwitterCardMetaProperty.CARD, card)
  }

  site(site: string | undefined | null): void {
    this.metaCommandService.newApply(TwitterCardMetaProperty.SITE, site)
  }

  siteId(siteId: string | undefined | null): void {
    this.metaCommandService.newApply(TwitterCardMetaProperty.SITE_ID, siteId)
  }

  creator(creator: string | undefined | null): void {
    this.metaCommandService.newApply(TwitterCardMetaProperty.CREATOR, creator)
  }

  creatorId(creatorId: string | undefined | null): void {
    this.metaCommandService.newApply(
      TwitterCardMetaProperty.CREATOR_ID,
      creatorId,
    )
  }

  description(description: string | undefined | null): void {
    this.metaCommandService.newApply(
      TwitterCardMetaProperty.DESCRIPTION,
      description,
    )
  }

  title(title: string | undefined | null): void {
    this.metaCommandService.newApply(TwitterCardMetaProperty.TITLE, title)
  }

  image(image: TwitterCardImage | undefined | null): void {
    if (image === null) {
      const imageProperties = TwitterCardMetaProperty.images()
      for (const property of imageProperties) {
        this.metaCommandService.newApply(property, null)
      }
      return
    }

    this.metaCommandService.newApply(
      TwitterCardMetaProperty.IMAGE,
      image?.url?.toString(),
    )
    this.metaCommandService.newApply(
      TwitterCardMetaProperty.IMAGE_ALT,
      image?.alt,
    )
  }
}
