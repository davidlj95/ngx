import { Injectable, Optional } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'
import { _GeneralMetadataRouteDataService } from 'ngx-metadata/general-metadata'
import { _DefaultsService } from 'ngx-metadata/common'
import { TwitterCardRouteStrategy } from './twitter-card-route-strategy'
import { TwitterCard } from '../twitter-card'
import { TwitterCardService } from '../twitter-card.service'
import { _CurrentRouteDataKeyPathMetadataStrategy } from 'ngx-metadata/routing'

export const KEY = 'twitterCard'

@Injectable()
export class DefaultTwitterCardRouteStrategy
  implements TwitterCardRouteStrategy
{
  constructor(
    private readonly currentRouteDataKeyPathMetadataStrategy: _CurrentRouteDataKeyPathMetadataStrategy,
    @Optional()
    private readonly generalMetadataRouteData: _GeneralMetadataRouteDataService | null,
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
