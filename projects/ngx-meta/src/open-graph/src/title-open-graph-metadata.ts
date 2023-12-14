import { BaseOpenGraphMetadata } from './base-open-graph-metadata'
import { OpenGraphMetadata } from './open-graph-metadata'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class TitleOpenGraphMetadata extends BaseOpenGraphMetadata<'title'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'title', globalName: 'title' })
  }

  set(value: OpenGraphMetadata['title']): void {
    this.metaService.set(new OpenGraphMetaProperty('title'), value)
  }
}
