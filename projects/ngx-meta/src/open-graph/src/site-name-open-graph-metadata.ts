import { BaseOpenGraphMetadata } from './base-open-graph-metadata'
import { OpenGraphMetadata } from './open-graph-metadata'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

const KEY = 'siteName'

@Injectable()
export class SiteNameOpenGraphMetadata extends BaseOpenGraphMetadata<
  typeof KEY
> {
  constructor(private readonly metaService: MetaService) {
    super(KEY, 'applicationName')
  }

  set(value: OpenGraphMetadata[typeof KEY]): void {
    this.metaService.set(
      new OpenGraphMetaProperty('site_name'),
      value?.toString(),
    )
  }
}
