import { Injectable, VERSION } from '@angular/core'
import { StandardMetadata } from './standard-metadata'
import { BaseStandardMetadata } from './base-standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

@Injectable()
export class GeneratorStandardMetadata extends BaseStandardMetadata<'generator'> {
  private readonly angularVersion = `Angular v${VERSION.full}`

  constructor(private readonly metaService: MetaService) {
    super({ name: 'generator' })
  }

  set(value: StandardMetadata['generator']): void {
    this.metaService.set(
      new StandardMetaProperty('generator'),
      value === true ? this.angularVersion : value,
    )
  }
}
