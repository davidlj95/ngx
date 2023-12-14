import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphProfileMetadataValues } from './open-graph-profile-metadata-values'
import { OpenGraphProfileMetaProperty } from './open-graph-profile-meta-property'

@Injectable()
export class LastNameOpenGraphProfileMetadata extends OpenGraphProfileMetadata<'lastName'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'lastName' })
  }

  set(value: OpenGraphProfileMetadataValues['lastName']): void {
    this.metaService.set(
      new OpenGraphProfileMetaProperty('last_name'),
      value?.toString(),
    )
  }
}
