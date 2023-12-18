import { Injectable } from '@angular/core'
import { StandardMetadata } from './standard-metadata'
import { BaseStandardMetadata } from './base-standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

const KEY = 'applicationName'

@Injectable()
export class ApplicationNameStandardMetadata extends BaseStandardMetadata<
  typeof KEY
> {
  constructor(private readonly metaService: MetaService) {
    super(KEY, KEY)
  }

  set(value: StandardMetadata[typeof KEY]): void {
    this.metaService.set(new StandardMetaProperty('application-name'), value)
  }
}
