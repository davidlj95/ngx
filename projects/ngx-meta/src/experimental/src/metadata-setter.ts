import { Injectable } from '@angular/core'
import { Metadata } from './metadata'
import { DefaultsService } from './defaults.service'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { MetadataValues } from './metadata-values'

@Injectable()
export class MetadataSetter {
  constructor(
    private readonly valueFromValues: MetadataValueFromValues,
    private readonly defaultsService: DefaultsService,
  ) {}

  set(metadata: Metadata<unknown>, values: MetadataValues): void {
    const value = this.valueFromValues.get(metadata.definition, values)
    const defaultValue = this.defaultsService.get(metadata.definition)
    const effectiveValue = [value, defaultValue].find((v) => v !== undefined)
    metadata.set(effectiveValue)
  }
}
