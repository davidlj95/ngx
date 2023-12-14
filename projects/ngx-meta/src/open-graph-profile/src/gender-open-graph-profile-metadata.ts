import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphProfileMetadataValues } from './open-graph-profile-metadata-values'
import { OpenGraphProfileMetaProperty } from './open-graph-profile-meta-property'

@Injectable()
export class GenderOpenGraphProfileMetadata extends OpenGraphProfileMetadata<'gender'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'gender' })
  }

  set(value: OpenGraphProfileMetadataValues['gender']): void {
    this.metaService.set(
      new OpenGraphProfileMetaProperty('gender'),
      value?.toString(),
    )
  }
}
