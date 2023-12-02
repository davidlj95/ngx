import { Inject, Injectable, Optional } from '@angular/core'
import { MetadataValueGetter } from './metadata-value-getter'
import { DEFAULTS_TOKEN } from './defaults-token'
import { MetadataDefinition } from './metadata-definition'

@Injectable()
export class DefaultsService {
  constructor(
    @Optional() @Inject(DEFAULTS_TOKEN) private readonly defaults: any,
    private readonly valueGetter: MetadataValueGetter,
  ) {}

  get<T>(definition: MetadataDefinition): T | undefined {
    if (!this.defaults) {
      return
    }
    const globalDefaultValue = definition.globalName
      ? this.defaults[definition.globalName]
      : undefined
    const defaultValue = this.valueGetter.get(definition, this.defaults)
    return defaultValue !== undefined ? defaultValue : globalDefaultValue
  }
}
