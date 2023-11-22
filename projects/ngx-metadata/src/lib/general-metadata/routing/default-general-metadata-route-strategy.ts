import { Injectable } from '@angular/core'
import { GeneralMetadata } from '../general-metadata'
import { GeneralMetadataService } from '../general-metadata.service'
import { GeneralMetadataRouteStrategy } from './general-metadata-route-strategy'
import { ActivatedRouteSnapshot } from '@angular/router'
import { CurrentRouteDataKeyPathMetadataStrategy } from '../../routing/current-route-data-key-path-metadata-strategy'

export const KEY = 'general'

@Injectable()
export class DefaultGeneralMetadataRouteStrategy
  implements GeneralMetadataRouteStrategy
{
  constructor(
    private readonly currentRouteDataKeyPathMetadataStrategy: CurrentRouteDataKeyPathMetadataStrategy,
    private readonly generalMetadataService: GeneralMetadataService,
  ) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot): GeneralMetadata | undefined {
    return this.currentRouteDataKeyPathMetadataStrategy.resolve(
      routeSnapshot,
      KEY,
    )
  }

  apply(metadata: GeneralMetadata | undefined): void {
    return this.generalMetadataService.apply(metadata ?? {})
  }
}
