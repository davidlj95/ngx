import { FactoryProvider, InjectionToken, Optional } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { RouteMetadataValues } from './route-metadata-values'
import { DEFAULTS_TOKEN } from './defaults-token'
import { isObject } from './is-object'
import { Metadata } from './metadata'
import {
  METADATA_JSON_RESOLVER,
  MetadataJsonResolver,
} from './metadata-json-resolver'

export type MetadataResolver = (
  metadata: Metadata,
  values: MetadataValues,
) => unknown
export const METADATA_RESOLVER = new InjectionToken<MetadataResolver>(
  ngDevMode ? 'NgxMeta Metadata Resolver' : 'NgxMetaMR',
)

export const METADATA_RESOLVER_FACTORY: (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
) => MetadataResolver =
  (
    jsonResolver: MetadataJsonResolver,
    routeMetadataValues: RouteMetadataValues | null,
    defaults: MetadataValues | null,
  ) =>
  (metadata: Metadata, values: MetadataValues) => {
    const value = jsonResolver(metadata, values)
    const routeValue = jsonResolver(metadata, routeMetadataValues?.get())
    const defaultValue = jsonResolver(metadata, defaults ?? {})
    return isObject(value) && (isObject(routeValue) || isObject(defaultValue))
      ? { ...(defaultValue as object), ...(routeValue as object), ...value }
      : [value, routeValue, defaultValue].find((v) => v !== undefined)
  }
export const METADATA_RESOLVER_PROVIDER: FactoryProvider = {
  provide: METADATA_RESOLVER,
  useFactory: METADATA_RESOLVER_FACTORY,
  deps: [
    METADATA_JSON_RESOLVER,
    [RouteMetadataValues, new Optional()],
    [DEFAULTS_TOKEN, new Optional()],
  ],
}
