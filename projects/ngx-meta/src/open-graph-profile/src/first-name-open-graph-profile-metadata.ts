import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphProfileMetadataValues } from './open-graph-profile-metadata-values'
import { OpenGraphProfileMetaProperty } from './open-graph-profile-meta-property'

@Injectable()
export class FirstNameOpenGraphProfileMetadata extends OpenGraphProfileMetadata<'firstName'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'firstName' })
  }

  set(value: OpenGraphProfileMetadataValues['firstName']): void {
    this.metaService.set(
      new OpenGraphProfileMetaProperty('first_name'),
      value?.toString(),
    )
  }
}
