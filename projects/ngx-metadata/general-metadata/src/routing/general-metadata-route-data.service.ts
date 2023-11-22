import { Inject, Injectable, Optional } from '@angular/core'
import { _MetadataRouteStrategy } from 'ngx-metadata/routing'
import { GeneralMetadata } from '../general-metadata'
import { ActivatedRouteSnapshot } from '@angular/router'
import { GENERAL_METADATA_DEFAULTS_TOKEN } from '../general-metadata-defaults-token'
import { GeneralMetadataRouteStrategy } from './general-metadata-route-strategy'
import { _DefaultsService } from 'ngx-metadata/common'

@Injectable()
export class GeneralMetadataRouteDataService
  implements Pick<_MetadataRouteStrategy<GeneralMetadata>, 'resolve'>
{
  constructor(
    private readonly generalMetadataRouteStrategy: GeneralMetadataRouteStrategy,
    @Optional()
    @Inject(GENERAL_METADATA_DEFAULTS_TOKEN)
    private readonly defaults: GeneralMetadata | null,
    private readonly defaultsService: _DefaultsService,
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
