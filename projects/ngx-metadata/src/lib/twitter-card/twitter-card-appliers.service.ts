import { Injectable } from '@angular/core'
import { MetadataAppliers } from '../common/metadata-appliers'
import { TwitterCard } from './twitter-card'
import { TwitterCardType } from './twitter-card-type'
import { TwitterCardImage } from './twitter-card-image'
import { MetaCommand } from '../common/meta-command/meta-command'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'
import { MetaCommandService } from '../common/meta-command/meta-command.service'

@Injectable()
export class TwitterCardAppliersService
  implements MetadataAppliers<TwitterCard>
{
  constructor(private readonly metaCommandService: MetaCommandService) {}

  card(card: TwitterCardType | undefined | null): void {
    this.metaCommandService.apply(
      new MetaCommand(TwitterCardMetaProperty.CARD, card),
    )
  }

  site(site: string | undefined | null): void {
    this.metaCommandService.apply(
      new MetaCommand(TwitterCardMetaProperty.SITE, site),
    )
  }

  siteId(siteId: string | undefined | null): void {
    this.metaCommandService.apply(
      new MetaCommand(TwitterCardMetaProperty.SITE_ID, siteId),
    )
  }

  creator(creator: string | undefined | null): void {
    this.metaCommandService.apply(
      new MetaCommand(TwitterCardMetaProperty.CREATOR, creator),
    )
  }

  creatorId(creatorId: string | undefined | null): void {
    this.metaCommandService.apply(
      new MetaCommand(TwitterCardMetaProperty.CREATOR_ID, creatorId),
    )
  }

  description(description: string | undefined | null): void {
    this.metaCommandService.apply(
      new MetaCommand(TwitterCardMetaProperty.DESCRIPTION, description),
    )
  }

  title(title: string | undefined | null): void {
    this.metaCommandService.apply(
      new MetaCommand(TwitterCardMetaProperty.TITLE, title),
    )
  }

  image(image: TwitterCardImage | undefined | null): void {
    if (image === null) {
      const imageProperties = TwitterCardMetaProperty.images()
      for (const property of imageProperties) {
        this.metaCommandService.apply(new MetaCommand(property, null))
      }
      return
    }

    this.metaCommandService.apply(
      new MetaCommand(TwitterCardMetaProperty.IMAGE, image?.url?.toString()),
    )
    this.metaCommandService.apply(
      new MetaCommand(TwitterCardMetaProperty.IMAGE_ALT, image?.alt),
    )
  }
}
