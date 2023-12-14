import { BaseOpenGraphMetadata } from './base-open-graph-metadata'
import { OpenGraphMetadata } from './open-graph-metadata'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class TypeOpenGraphMetadata extends BaseOpenGraphMetadata<'type'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'type' })
  }

  set(value: OpenGraphMetadata['type']): void {
    this.metaService.set(new OpenGraphMetaProperty('type'), value)
  }
}
