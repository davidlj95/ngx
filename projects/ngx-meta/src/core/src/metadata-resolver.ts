import { Injectable } from '@angular/core'
import { DefaultsService } from './defaults.service'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { MetadataValues } from './metadata-values'
import { RouteMetadataValues } from './route-metadata-values'
import { isObject } from './is-object'
import { MetadataDefinition } from './metadata-definition'
import { MaybeUndefined } from './maybe-undefined'

@Injectable({ providedIn: 'root' })
export class MetadataResolver {
  constructor(
    private readonly valueFromValues: MetadataValueFromValues,
    private readonly routeMetadataValues: RouteMetadataValues,
    private readonly defaultsService: DefaultsService,
  ) {}

  get<T>(
    metadataDefinition: MetadataDefinition,
    values: MetadataValues,
  ): T | undefined {
    const value = this.valueFromValues.get(metadataDefinition, values)
    const routeValue = this.valueFromValues.get(
      metadataDefinition,
      this.routeMetadataValues.get(),
    )
    const defaultValue = this.valueFromValues.get(
      metadataDefinition,
      this.defaultsService.get(),
    )
    const effectiveValue =
      isObject(value) && (isObject(routeValue) || isObject(defaultValue))
        ? { ...(defaultValue as object), ...(routeValue as object), ...value }
        : [value, routeValue, defaultValue].find((v) => v !== undefined)

    return effectiveValue as MaybeUndefined<T>
  }
}
