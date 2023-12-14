import { Injectable } from '@angular/core'
import { StandardMetadata } from './standard-metadata'
import { BaseStandardMetadata } from './base-standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

@Injectable()
export class AuthorStandardMetadata extends BaseStandardMetadata<'author'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'author' })
  }

  set(value: StandardMetadata['author']): void {
    this.metaService.set(new StandardMetaProperty('author'), value)
  }
}
