import { Injectable } from '@angular/core'
import { DefaultsService } from './defaults.service'
import { MetadataJsonResolver } from './metadata-json-resolver'
import { MetadataValues } from './metadata-values'
import { RouteMetadataValues } from './route-metadata-values'
import { isObject } from './is-object'
import { Metadata } from './metadata'
import { MaybeUndefined } from './maybe-undefined'

@Injectable({ providedIn: 'root' })
export class MetadataResolver {
  constructor(
    private readonly jsonResolver: MetadataJsonResolver,
    private readonly routeMetadataValues: RouteMetadataValues,
    private readonly defaultsService: DefaultsService,
  ) {}

  get<T>(metadataDefinition: Metadata, values: MetadataValues): T | undefined {
    const value = this.jsonResolver.get(metadataDefinition, values)
    const routeValue = this.jsonResolver.get(
      metadataDefinition,
      this.routeMetadataValues.get(),
    )
    const defaultValue = this.jsonResolver.get(
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
