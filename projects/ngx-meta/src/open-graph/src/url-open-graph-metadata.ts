import { BaseOpenGraphMetadata } from './base-open-graph-metadata'
import { OpenGraphMetadata } from './open-graph-metadata'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class UrlOpenGraphMetadata extends BaseOpenGraphMetadata<'url'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'url', globalName: 'canonicalUrl' })
  }

  set(value: OpenGraphMetadata['url']): void {
    this.metaService.set(new OpenGraphMetaProperty('url'), value?.toString())
  }
}
