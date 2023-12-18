import { BaseOpenGraphMetadata } from './base-open-graph-metadata'
import { OpenGraphMetadata } from './open-graph-metadata'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

const KEY = 'type'

@Injectable()
export class TypeOpenGraphMetadata extends BaseOpenGraphMetadata<typeof KEY> {
  constructor(private readonly metaService: MetaService) {
    super(KEY)
  }

  set(value: OpenGraphMetadata[typeof KEY]): void {
    this.metaService.set(new OpenGraphMetaProperty(KEY), value)
  }
}
