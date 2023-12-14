import { Injectable } from '@angular/core'
import { StandardMetadataValues } from './standard-metadata-values'
import { StandardMetadata } from './standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

@Injectable()
export class KeywordsStandardMetadata extends StandardMetadata<'keywords'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'keywords' })
  }

  set(value: StandardMetadataValues['keywords']): void {
    this.metaService.set(new StandardMetaProperty('keywords'), value?.join(','))
  }
}
