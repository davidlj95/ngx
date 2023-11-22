import { Injectable } from '@angular/core'
import { MetadataApplier } from '../common/metadata-applier'
import { TwitterCard } from './twitter-card'
import { TwitterCardAppliersService } from './twitter-card-appliers.service'

@Injectable()
export class TwitterCardApplierService implements MetadataApplier<TwitterCard> {
  constructor(private readonly appliers: TwitterCardAppliersService) {}

  apply(metadata: TwitterCard): void {
    this.appliers.card(metadata.card)
    this.appliers.site(metadata.site)
    this.appliers.siteId(metadata.siteId)
    this.appliers.creator(metadata.creator)
    this.appliers.creatorId(metadata.creatorId)
    this.appliers.description(metadata.description)
    this.appliers.title(metadata.title)
    this.appliers.image(metadata.image)
  }
}
