import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseOpenGraphProfileMetadata } from './base-open-graph-profile-metadata'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphProfileMetaProperty } from './open-graph-profile-meta-property'

@Injectable()
export class UsernameOpenGraphProfileMetadata extends BaseOpenGraphProfileMetadata<'username'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'username' })
  }

  set(value: OpenGraphProfileMetadata['username']): void {
    this.metaService.set(
      new OpenGraphProfileMetaProperty('username'),
      value?.toString(),
    )
  }
}
