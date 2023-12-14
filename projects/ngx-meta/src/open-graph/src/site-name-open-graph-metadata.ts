import { OpenGraphMetadata } from './open-graph-metadata'
import { OpenGraphMetadataValues } from './open-graph-metadata-values'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class SiteNameOpenGraphMetadata extends OpenGraphMetadata<'siteName'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'siteName', globalName: 'applicationName' })
  }

  set(value: OpenGraphMetadataValues['siteName']): void {
    this.metaService.set(
      new OpenGraphMetaProperty('site_name'),
      value?.toString(),
    )
  }
}
