import { Injectable } from '@angular/core'
import { Metadata } from './metadata'
import { DefaultsService } from './defaults.service'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { MetadataValues } from './metadata-values'
import { RouteMetadataValues } from './route-metadata-values'
import { isObject } from './is-object'

@Injectable({ providedIn: 'root' })
export class MetadataSetter {
  constructor(
    private readonly valueFromValues: MetadataValueFromValues,
    private readonly routeMetadataValues: RouteMetadataValues,
    private readonly defaultsService: DefaultsService,
  ) {}

  set(metadata: Metadata<unknown>, values: MetadataValues): void {
    const value = this.valueFromValues.get(metadata.definition, values)
    const routeValue = this.valueFromValues.get(
      metadata.definition,
      this.routeMetadataValues.get(),
    )
    const defaultValue = this.defaultsService.get(metadata.definition)
    const effectiveValue =
      isObject(value) && (isObject(routeValue) || isObject(defaultValue))
        ? { ...(defaultValue as object), ...(routeValue as object), ...value }
        : [value, routeValue, defaultValue].find((v) => v !== undefined)
    metadata.set(effectiveValue)
  }
}
