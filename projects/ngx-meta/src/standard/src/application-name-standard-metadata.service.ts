import { Injectable } from '@angular/core'
import { StandardMetadata } from './standard-metadata'
import { BaseStandardMetadata } from './base-standard-metadata'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'

@Injectable()
export class ApplicationNameStandardMetadata extends BaseStandardMetadata<'applicationName'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'applicationName', globalName: 'applicationName' })
  }

  set(value: StandardMetadata['applicationName']): void {
    this.metaService.set(new StandardMetaProperty('application-name'), value)
  }
}
