import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseOpenGraphProfileMetadata } from './base-open-graph-profile-metadata'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphProfileMetaProperty } from './open-graph-profile-meta-property'

@Injectable()
export class GenderOpenGraphProfileMetadata extends BaseOpenGraphProfileMetadata<'gender'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'gender' })
  }

  set(value: OpenGraphProfileMetadata['gender']): void {
    this.metaService.set(
      new OpenGraphProfileMetaProperty('gender'),
      value?.toString(),
    )
  }
}
