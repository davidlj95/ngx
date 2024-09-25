import { FactoryProvider, InjectionToken, Optional } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { _RouteValuesService } from './route-values.service'
import { DEFAULTS } from './defaults'
import {
  METADATA_JSON_RESOLVER,
  MetadataJsonResolver,
} from './metadata-json-resolver'
import { MetadataResolverOptions } from './ngx-meta-metadata-manager'
import { isObject } from './is-object'

/**
 * @internal
 */
export type MetadataResolver = (
  values: MetadataValues,
  resolverOptions: MetadataResolverOptions,
) => unknown
export const METADATA_RESOLVER = new InjectionToken<MetadataResolver>(
  ngDevMode ? 'NgxMeta Metadata Resolver' : 'NgxMetaMR',
)

export const METADATA_RESOLVER_FACTORY: (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
) => MetadataResolver =
  (
    jsonResolver: MetadataJsonResolver,
    routeMetadataValues: _RouteValuesService | null,
    defaults: MetadataValues | null,
  ) =>
  (values, resolverOptions) => {
    const value = jsonResolver(values, resolverOptions)
    const routeValue = jsonResolver(routeMetadataValues?.get(), resolverOptions)
    const defaultValue = jsonResolver(defaults ?? undefined, resolverOptions)
    if (
      isObject(value) &&
      (isObject(routeValue) || isObject(defaultValue)) &&
      resolverOptions.objectMerge
    ) {
      return {
        ...(defaultValue as object),
        ...(routeValue as object),
        ...value,
      }
    }
    return [value, routeValue, defaultValue].find((v) => v !== undefined)
  }
export const METADATA_RESOLVER_PROVIDER: FactoryProvider = {
  provide: METADATA_RESOLVER,
  useFactory: METADATA_RESOLVER_FACTORY,
  deps: [
    METADATA_JSON_RESOLVER,
    [_RouteValuesService, new Optional()],
    [DEFAULTS, new Optional()],
  ],
}
