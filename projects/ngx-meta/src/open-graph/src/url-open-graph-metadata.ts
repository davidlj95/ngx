import { OpenGraphMetadata } from './open-graph-metadata'
import { OpenGraphMetadataValues } from './open-graph-metadata-values'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class UrlOpenGraphMetadata extends OpenGraphMetadata<'url'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'url', globalName: 'canonicalUrl' })
  }

  set(value: OpenGraphMetadataValues['url']): void {
    this.metaService.set(new OpenGraphMetaProperty('url'), value?.toString())
  }
}
