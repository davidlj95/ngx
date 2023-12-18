import { Injectable } from '@angular/core'
import { StandardMetadata } from './standard-metadata'
import { BaseStandardMetadata } from './base-standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

const KEY = 'author'

@Injectable()
export class AuthorStandardMetadata extends BaseStandardMetadata<typeof KEY> {
  constructor(private readonly metaService: MetaService) {
    super(KEY)
  }

  set(value: StandardMetadata[typeof KEY]): void {
    this.metaService.set(new StandardMetaProperty(KEY), value)
  }
}
