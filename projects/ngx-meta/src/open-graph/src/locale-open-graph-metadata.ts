import { BaseOpenGraphMetadata } from './base-open-graph-metadata'
import { OpenGraphMetadata } from './open-graph-metadata'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class LocaleOpenGraphMetadata extends BaseOpenGraphMetadata<'locale'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'locale', globalName: 'locale' })
  }

  set(value: OpenGraphMetadata['locale']): void {
    this.metaService.set(new OpenGraphMetaProperty('locale'), value?.toString())
  }
}
