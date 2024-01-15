import { Inject, Injectable, Optional } from '@angular/core'
import { MetadataJsonResolver } from './metadata-json-resolver'
import { MetadataValues } from './metadata-values'
import { RouteMetadataValues } from './route-metadata-values'
import { DEFAULTS_TOKEN } from './defaults-token'
import { isObject } from './is-object'
import { Metadata } from './metadata'
import { MaybeUndefined } from './maybe-undefined'

@Injectable({ providedIn: 'root' })
export class MetadataResolver {
  constructor(
    private readonly jsonResolver: MetadataJsonResolver,
    private readonly routeMetadataValues: RouteMetadataValues,
    @Optional()
    @Inject(DEFAULTS_TOKEN)
    private readonly defaults: MetadataValues | null,
  ) {}

  get<T>(metadata: Metadata, values: MetadataValues): T | undefined {
    const value = this.jsonResolver.get(metadata, values)
    const routeValue = this.jsonResolver.get(
      metadata,
      this.routeMetadataValues.get(),
    )
    const defaultValue = this.jsonResolver.get(metadata, this.defaults ?? {})
    const effectiveValue =
      isObject(value) && (isObject(routeValue) || isObject(defaultValue))
        ? { ...(defaultValue as object), ...(routeValue as object), ...value }
        : [value, routeValue, defaultValue].find((v) => v !== undefined)

    return effectiveValue as MaybeUndefined<T>
  }
}
