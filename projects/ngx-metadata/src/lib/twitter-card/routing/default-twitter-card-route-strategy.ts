import { Injectable, Optional } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'
import { GeneralMetadataRouteDataService } from '../../general-metadata/routing/general-metadata-route-data.service'
import { _DefaultsService } from 'ngx-metadata/common'
import { TwitterCardRouteStrategy } from './twitter-card-route-strategy'
import { TwitterCard } from '../twitter-card'
import { CurrentRouteDataKeyPathMetadataStrategy } from '../../routing/current-route-data-key-path-metadata-strategy'
import { TwitterCardService } from '../twitter-card.service'

export const KEY = 'twitterCard'

@Injectable()
export class DefaultTwitterCardRouteStrategy
  implements TwitterCardRouteStrategy
{
  constructor(
    private readonly currentRouteDataKeyPathMetadataStrategy: CurrentRouteDataKeyPathMetadataStrategy,
    @Optional()
    private readonly generalMetadataRouteData: GeneralMetadataRouteDataService | null,
    private readonly defaultsService: _DefaultsService,
    private readonly twitterCardService: TwitterCardService,
  ) {}

  public resolve(
    routeSnapshot: ActivatedRouteSnapshot,
  ): TwitterCard | undefined {
    const twitterCard = this.currentRouteDataKeyPathMetadataStrategy.resolve(
      routeSnapshot,
      KEY,
    )
    if (!this.generalMetadataRouteData) {
      return twitterCard
    }
    const generalMetadata = this.generalMetadataRouteData.resolve(routeSnapshot)
    const compatibleMetadata = {
      title: generalMetadata?.title,
      description: generalMetadata?.description,
      image: generalMetadata?.image,
    }
    if (!twitterCard) {
      return compatibleMetadata
    }
    return this.defaultsService.resolve(twitterCard, compatibleMetadata)
  }

  public apply(metadata: TwitterCard | undefined): void {
    this.twitterCardService.apply(metadata ?? {})
  }
}
