import { Inject, Injectable, Optional } from '@angular/core'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { DEFAULTS_TOKEN } from './defaults-token'
import { MetadataDefinition } from './metadata-definition'
import { MetadataValues } from './metadata-values'

@Injectable()
export class DefaultsService {
  constructor(
    @Optional()
    @Inject(DEFAULTS_TOKEN)
    private readonly defaults: MetadataValues | null,
    private readonly valueFromValues: MetadataValueFromValues,
  ) {}

  get<T>(definition: MetadataDefinition): T | undefined {
    if (!this.defaults) {
      return
    }
    const globalDefaultValue = definition.globalName
      ? this.defaults[definition.globalName]
      : undefined
    const defaultValue = this.valueFromValues.get(definition, this.defaults)
    const effectiveValue =
      defaultValue !== undefined ? defaultValue : globalDefaultValue
    return effectiveValue !== undefined ? (effectiveValue as T) : undefined
  }
}
