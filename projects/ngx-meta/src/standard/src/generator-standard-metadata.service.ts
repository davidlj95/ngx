import { Injectable, VERSION } from '@angular/core'
import { StandardMetadata } from './standard-metadata'
import { BaseStandardMetadata } from './base-standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

const KEY = 'generator'

@Injectable()
export class GeneratorStandardMetadata extends BaseStandardMetadata<
  typeof KEY
> {
  private readonly angularVersion = `Angular v${VERSION.full}`

  constructor(private readonly metaService: MetaService) {
    super(KEY)
  }

  set(value: StandardMetadata[typeof KEY]): void {
    this.metaService.set(
      new StandardMetaProperty(KEY),
      value === true ? this.angularVersion : value,
    )
  }
}
