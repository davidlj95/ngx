import { OpenGraphMetadata } from './open-graph-metadata'
import { OpenGraphMetadataValues } from './open-graph-metadata-values'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class TitleOpenGraphMetadata extends OpenGraphMetadata<'title'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'title', globalName: 'title' })
  }

  set(value: OpenGraphMetadataValues['title']): void {
    this.metaService.set(new OpenGraphMetaProperty('title'), value)
  }
}
