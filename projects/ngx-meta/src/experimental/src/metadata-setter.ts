import { Injectable } from '@angular/core'
import { Metadata } from './metadata'
import { DefaultsService } from './defaults.service'
import { MetadataValueGetter } from './metadata-value-getter'
import { MetadataValues } from './metadata-values'

@Injectable()
export class MetadataSetter {
  constructor(
    private readonly valueGetter: MetadataValueGetter,
    private readonly defaultsService: DefaultsService,
  ) {}

  set(metadata: Metadata<unknown>, values: MetadataValues): void {
    const value = this.valueGetter.get(metadata.definition, values)
    const globalValue = metadata.definition.globalName
      ? values[metadata.definition.globalName]
      : undefined
    const defaultValue = this.defaultsService.get(metadata.definition)
    const effectiveValue = [value, globalValue, defaultValue].find(
      (v) => v !== undefined,
    )
    metadata.set(effectiveValue)
  }
}
