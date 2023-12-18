import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { BaseOpenGraphProfileMetadata } from './base-open-graph-profile-metadata'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphProfileMetaProperty } from './open-graph-profile-meta-property'

const KEY = 'username'

@Injectable()
export class UsernameOpenGraphProfileMetadata extends BaseOpenGraphProfileMetadata<
  typeof KEY
> {
  constructor(private readonly metaService: MetaService) {
    super(KEY)
  }

  set(value: OpenGraphProfileMetadata[typeof KEY]): void {
    this.metaService.set(
      new OpenGraphProfileMetaProperty(KEY),
      value?.toString(),
    )
  }
}
