import { Injectable, VERSION } from '@angular/core'
import { StandardMetadataValues } from './standard-metadata-values'
import { StandardMetadata } from './standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

@Injectable()
export class GeneratorMetadata extends StandardMetadata<'generator'> {
  private readonly angularVersion = `Angular v${VERSION.full}`

  constructor(private readonly metaService: MetaService) {
    super({ name: 'generator' })
  }

  set(value: StandardMetadataValues['generator']): void {
    this.metaService.apply(
      new StandardMetaProperty('generator'),
      value === true ? this.angularVersion : value,
    )
  }
}
