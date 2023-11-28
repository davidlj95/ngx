import { Injectable } from '@angular/core'
import { TwitterCard } from './twitter-card'
import { TwitterCardAppliersService } from './twitter-card-appliers.service'
import { _MetadataApplier } from '@davidlj95/ngx-meta/common'

@Injectable()
export class TwitterCardApplierService
  implements _MetadataApplier<TwitterCard>
{
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
