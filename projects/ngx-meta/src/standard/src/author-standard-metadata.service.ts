import { Injectable } from '@angular/core'
import { StandardMetadataValues } from './standard-metadata-values'
import { StandardMetadata } from './standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

@Injectable()
export class AuthorStandardMetadata extends StandardMetadata<'author'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'author' })
  }

  set(value: StandardMetadataValues['author']): void {
    this.metaService.set(new StandardMetaProperty('author'), value)
  }
}
