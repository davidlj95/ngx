import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphProfileMetadataValues } from './open-graph-profile-metadata-values'
import { OpenGraphProfileMetaProperty } from './open-graph-profile-meta-property'

@Injectable()
export class UsernameOpenGraphProfileMetadata extends OpenGraphProfileMetadata<'username'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'username' })
  }

  set(value: OpenGraphProfileMetadataValues['username']): void {
    this.metaService.set(
      new OpenGraphProfileMetaProperty('username'),
      value?.toString(),
    )
  }
}
