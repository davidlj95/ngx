import { Injectable, Optional } from '@angular/core'
import { Metadata } from './metadata'
import { DefaultsService } from './defaults.service'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { MetadataValues } from './metadata-values'
import { RouteMetadataValues } from './route-metadata-values'

@Injectable()
export class MetadataSetter {
  constructor(
    private readonly valueFromValues: MetadataValueFromValues,
    @Optional()
    private readonly routeMetadataValues: RouteMetadataValues | null,
    private readonly defaultsService: DefaultsService,
  ) {}

  set(metadata: Metadata<unknown>, values: MetadataValues): void {
    const value = this.valueFromValues.get(metadata.definition, values)
    const routeValue = this.valueFromValues.get(
      metadata.definition,
      this.routeMetadataValues?.get(),
    )
    const defaultValue = this.defaultsService.get(metadata.definition)
    const effectiveValue = [value, routeValue, defaultValue].find(
      (v) => v !== undefined,
    )
    metadata.set(effectiveValue)
  }
}
