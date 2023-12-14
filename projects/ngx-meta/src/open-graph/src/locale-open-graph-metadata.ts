import { OpenGraphMetadata } from './open-graph-metadata'
import { OpenGraphMetadataValues } from './open-graph-metadata-values'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

@Injectable()
export class LocaleOpenGraphMetadata extends OpenGraphMetadata<'locale'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'locale', globalName: 'locale' })
  }

  set(value: OpenGraphMetadataValues['locale']): void {
    this.metaService.set(new OpenGraphMetaProperty('locale'), value?.toString())
  }
}
