import { Injectable } from '@angular/core'
import { StandardMetadata } from './standard-metadata'
import { BaseStandardMetadata } from './base-standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

@Injectable()
export class KeywordsStandardMetadata extends BaseStandardMetadata<'keywords'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'keywords' })
  }

  set(value: StandardMetadata['keywords']): void {
    this.metaService.set(new StandardMetaProperty('keywords'), value?.join(','))
  }
}
