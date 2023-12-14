import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseOpenGraphProfileMetadata } from './base-open-graph-profile-metadata'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphProfileMetaProperty } from './open-graph-profile-meta-property'

@Injectable()
export class LastNameOpenGraphProfileMetadata extends BaseOpenGraphProfileMetadata<'lastName'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'lastName' })
  }

  set(value: OpenGraphProfileMetadata['lastName']): void {
    this.metaService.set(
      new OpenGraphProfileMetaProperty('last_name'),
      value?.toString(),
    )
  }
}
