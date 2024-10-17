import { inject } from '@angular/core'
import { MetadataValues } from '../service'
import { injectDefaults } from '../defaults/defaults'
import { metadataJsonResolver } from './metadata-json-resolver'
import { MetadataResolverOptions } from '../managers'
import { isObject } from '../utils/is-object'
import { injectRouteMetadataStrategy } from '../routing/route-metadata-strategy'
import { _LazyInjectionToken, _makeInjectionToken } from '../utils'

export const metadataResolver: _LazyInjectionToken<MetadataResolver> = () =>
  _makeInjectionToken(ngDevMode ? 'Metadata Resolver' : 'MRes', () => {
    const jsonResolver = inject(metadataJsonResolver())
    const routeMetadataStrategy = injectRouteMetadataStrategy()
    const defaults = injectDefaults()
    return (values, resolverOptions) => {
      const value = jsonResolver(values, resolverOptions)
      const routeValue = jsonResolver(routeMetadataStrategy(), resolverOptions)
      const defaultValue = jsonResolver(defaults ?? undefined, resolverOptions)
      /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
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
  })

/**
 * @internal
 */
export type MetadataResolver = (
  values: MetadataValues,
  resolverOptions: MetadataResolverOptions,
) => unknown
