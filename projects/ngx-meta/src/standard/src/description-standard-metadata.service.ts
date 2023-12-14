import { Injectable } from '@angular/core'
import { StandardMetadata } from './standard-metadata'
import { BaseStandardMetadata } from './base-standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

@Injectable()
export class DescriptionStandardMetadata extends BaseStandardMetadata<'description'> {
  constructor(private readonly metaService: MetaService) {
    super({
      name: 'description',
      globalName: 'description',
    })
  }

  set(value: StandardMetadata['description']): void {
    this.metaService.set(new StandardMetaProperty('description'), value)
  }
}
