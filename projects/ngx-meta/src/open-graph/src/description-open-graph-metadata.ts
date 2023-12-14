import { OpenGraphMetadata } from './open-graph-metadata'
import { OpenGraphMetadataValues } from './open-graph-metadata-values'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class DescriptionOpenGraphMetadata extends OpenGraphMetadata<'description'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'description', globalName: 'description' })
  }

  set(value: OpenGraphMetadataValues['description']): void {
    this.metaService.set(
      new OpenGraphMetaProperty('description'),
      value?.toString(),
    )
  }
}
