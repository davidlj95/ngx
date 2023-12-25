import { Inject, Injectable, Optional } from '@angular/core'
import { DEFAULTS_TOKEN } from './defaults-token'
import { MetadataValues } from './metadata-values'

@Injectable({ providedIn: 'root' })
export class DefaultsService {
  constructor(
    @Optional()
    @Inject(DEFAULTS_TOKEN)
    private readonly defaults: MetadataValues | null,
  ) {}

  get(): MetadataValues {
    return this.defaults ?? {}
  }
}
