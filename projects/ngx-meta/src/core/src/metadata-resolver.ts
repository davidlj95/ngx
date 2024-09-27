import { inject, InjectionToken } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { injectDefaults } from './defaults'
import { METADATA_JSON_RESOLVER } from './metadata-json-resolver'
import { MetadataResolverOptions } from './ngx-meta-metadata-manager'
import { isObject } from './is-object'
import { _injectRouteMetadataStrategy } from './route-metadata-strategy'

export const METADATA_RESOLVER = new InjectionToken<MetadataResolver>(
  ngDevMode ? 'NgxMeta Metadata Resolver' : 'NgxMetaMR',
  {
    factory: () => {
      const jsonResolver = inject(METADATA_JSON_RESOLVER)
      const routeMetadataStrategy = _injectRouteMetadataStrategy()
      const defaults = injectDefaults()
      return (values, resolverOptions) => {
        const value = jsonResolver(values, resolverOptions)
        const routeValue = jsonResolver(
          routeMetadataStrategy(),
          resolverOptions,
        )
        const defaultValue = jsonResolver(
          defaults ?? undefined,
          resolverOptions,
        )
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
    },
  },
)

/**
 * @internal
 */
export type MetadataResolver = (
  values: MetadataValues,
  resolverOptions: MetadataResolverOptions,
) => unknown
