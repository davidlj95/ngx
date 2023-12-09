import { Injectable } from '@angular/core'
import { StandardMetadataValues } from './standard-metadata-values'
import { StandardMetadata } from './standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

@Injectable()
export class ApplicationNameMetadata extends StandardMetadata<'applicationName'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'applicationName', globalName: 'applicationName' })
  }

  set(value: StandardMetadataValues['applicationName']): void {
    this.metaService.apply(new StandardMetaProperty('application-name'), value)
  }
}
