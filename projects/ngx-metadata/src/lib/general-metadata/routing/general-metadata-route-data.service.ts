import { Inject, Injectable, Optional } from '@angular/core'
import { MetadataRouteStrategy } from '../../routing/metadata-route-strategy'
import { GeneralMetadata } from '../general-metadata'
import { ActivatedRouteSnapshot } from '@angular/router'
import { DefaultsService } from '../../common/defaults.service'
import { GENERAL_METADATA_DEFAULTS_TOKEN } from '../general-metadata-defaults-token'
import { GeneralMetadataRouteStrategy } from './general-metadata-route-strategy'

@Injectable()
export class GeneralMetadataRouteDataService
  implements Pick<MetadataRouteStrategy<GeneralMetadata>, 'resolve'>
{
  constructor(
    private readonly generalMetadataRouteStrategy: GeneralMetadataRouteStrategy,
    @Optional()
    @Inject(GENERAL_METADATA_DEFAULTS_TOKEN)
    private readonly defaults: GeneralMetadata | null,
    private readonly defaultsService: DefaultsService,
  ) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot): GeneralMetadata | undefined {
    const data = this.generalMetadataRouteStrategy.resolve(routeSnapshot)
    if (!this.defaults) {
      return data
    }
    if (!data) {
      return this.defaults
    }
    return this.defaultsService.resolve(data, this.defaults)
  }
}
