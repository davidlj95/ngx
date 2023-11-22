import { Injectable } from '@angular/core'
import {
  _MetaCommand,
  _MetaCommandService,
  _MetadataAppliers,
} from 'ngx-metadata/common'
import { TwitterCard } from './twitter-card'
import { TwitterCardType } from './twitter-card-type'
import { TwitterCardImage } from './twitter-card-image'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'

@Injectable()
export class TwitterCardAppliersService
  implements _MetadataAppliers<TwitterCard>
{
  constructor(private readonly metaCommandService: _MetaCommandService) {}

  card(card: TwitterCardType | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(TwitterCardMetaProperty.CARD, card),
    )
  }

  site(site: string | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(TwitterCardMetaProperty.SITE, site),
    )
  }

  siteId(siteId: string | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(TwitterCardMetaProperty.SITE_ID, siteId),
    )
  }

  creator(creator: string | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(TwitterCardMetaProperty.CREATOR, creator),
    )
  }

  creatorId(creatorId: string | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(TwitterCardMetaProperty.CREATOR_ID, creatorId),
    )
  }

  description(description: string | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(TwitterCardMetaProperty.DESCRIPTION, description),
    )
  }

  title(title: string | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(TwitterCardMetaProperty.TITLE, title),
    )
  }

  image(image: TwitterCardImage | undefined | null): void {
    if (image === null) {
      const imageProperties = TwitterCardMetaProperty.images()
      for (const property of imageProperties) {
        this.metaCommandService.apply(new _MetaCommand(property, null))
      }
      return
    }

    this.metaCommandService.apply(
      new _MetaCommand(TwitterCardMetaProperty.IMAGE, image?.url?.toString()),
    )
    this.metaCommandService.apply(
      new _MetaCommand(TwitterCardMetaProperty.IMAGE_ALT, image?.alt),
    )
  }
}
