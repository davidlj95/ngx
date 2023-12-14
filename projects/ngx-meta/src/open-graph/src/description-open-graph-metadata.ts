import { BaseOpenGraphMetadata } from './base-open-graph-metadata'
import { OpenGraphMetadata } from './open-graph-metadata'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class DescriptionOpenGraphMetadata extends BaseOpenGraphMetadata<'description'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'description', globalName: 'description' })
  }

  set(value: OpenGraphMetadata['description']): void {
    this.metaService.set(
      new OpenGraphMetaProperty('description'),
      value?.toString(),
    )
  }
}
