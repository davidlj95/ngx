import { Injectable } from '@angular/core'
import { StandardMetadataValues } from './standard-metadata-values'
import { StandardMetadata } from './standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

@Injectable()
export class DescriptionStandardMetadata extends StandardMetadata<'description'> {
  constructor(private readonly metaService: MetaService) {
    super({
      name: 'description',
      globalName: 'description',
    })
  }

  set(value: StandardMetadataValues['description']): void {
    this.metaService.set(new StandardMetaProperty('description'), value)
  }
}
