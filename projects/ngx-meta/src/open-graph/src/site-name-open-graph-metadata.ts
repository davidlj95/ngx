import { BaseOpenGraphMetadata } from './base-open-graph-metadata'
import { OpenGraphMetadata } from './open-graph-metadata'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class SiteNameOpenGraphMetadata extends BaseOpenGraphMetadata<'siteName'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'siteName', globalName: 'applicationName' })
  }

  set(value: OpenGraphMetadata['siteName']): void {
    this.metaService.set(
      new OpenGraphMetaProperty('site_name'),
      value?.toString(),
    )
  }
}
