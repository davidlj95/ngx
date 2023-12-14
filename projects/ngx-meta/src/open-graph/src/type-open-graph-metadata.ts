import { OpenGraphMetadata } from './open-graph-metadata'
import { OpenGraphMetadataValues } from './open-graph-metadata-values'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class TypeOpenGraphMetadata extends OpenGraphMetadata<'type'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'type' })
  }

  set(value: OpenGraphMetadataValues['type']): void {
    this.metaService.set(new OpenGraphMetaProperty('type'), value)
  }
}
