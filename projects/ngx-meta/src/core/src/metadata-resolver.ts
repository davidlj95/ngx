import { FactoryProvider, InjectionToken, Optional } from '@angular/core'
import { MetadataJsonResolver } from './metadata-json-resolver'
import { MetadataValues } from './metadata-values'
import { RouteMetadataValues } from './route-metadata-values'
import { DEFAULTS_TOKEN } from './defaults-token'
import { isObject } from './is-object'
import { Metadata } from './metadata'
import { MaybeUndefined } from './maybe-undefined'

export type MetadataResolverType<T = unknown> = (
  metadata: Metadata,
  values: MetadataValues,
) => T | undefined
export const METADATA_RESOLVER = new InjectionToken<MetadataResolverType>(
  ngDevMode ? 'NgxMeta Metadata Resolver' : 'NgxMetaMR',
)

export const METADATA_RESOLVER_FACTORY: <T>(
  ...deps: Exclude<FactoryProvider['deps'], undefined>
) => MetadataResolverType<T> =
  (
    jsonResolver: MetadataJsonResolver,
    routeMetadataValues: RouteMetadataValues,
    defaults: MetadataValues | null,
  ) =>
  <T>(metadata: Metadata, values: MetadataValues) => {
    const value = jsonResolver.get(metadata, values)
    const routeValue = jsonResolver.get(metadata, routeMetadataValues.get())
    const defaultValue = jsonResolver.get(metadata, defaults ?? {})
    const effectiveValue =
      isObject(value) && (isObject(routeValue) || isObject(defaultValue))
        ? { ...(defaultValue as object), ...(routeValue as object), ...value }
        : [value, routeValue, defaultValue].find((v) => v !== undefined)

    return effectiveValue as MaybeUndefined<T>
  }
export const METADATA_RESOLVER_PROVIDER: FactoryProvider = {
  provide: METADATA_RESOLVER,
  useFactory: METADATA_RESOLVER_FACTORY,
  deps: [
    MetadataJsonResolver,
    RouteMetadataValues,
    [DEFAULTS_TOKEN, new Optional()],
  ],
}
