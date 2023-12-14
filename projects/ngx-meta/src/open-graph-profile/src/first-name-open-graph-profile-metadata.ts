import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseOpenGraphProfileMetadata } from './base-open-graph-profile-metadata'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphProfileMetaProperty } from './open-graph-profile-meta-property'

@Injectable()
export class FirstNameOpenGraphProfileMetadata extends BaseOpenGraphProfileMetadata<'firstName'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'firstName' })
  }

  set(value: OpenGraphProfileMetadata['firstName']): void {
    this.metaService.set(
      new OpenGraphProfileMetaProperty('first_name'),
      value?.toString(),
    )
  }
}
