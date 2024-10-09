import { inject } from '@angular/core'
import { MetadataValues } from '../service'
import { _LazyInjectionToken, _makeInjectionToken } from '../utils'

/**
 * @internal
 */
export const _routeMetadataStrategy: _LazyInjectionToken<
  _RouteMetadataStrategy
> = () => _makeInjectionToken(ngDevMode ? 'Route metadata strategy' : 'RMS')

/**
 * @internal
 */
export type _RouteMetadataStrategy = () => MetadataValues | undefined

export const injectRouteMetadataStrategy: () => _RouteMetadataStrategy = () =>
  inject(_routeMetadataStrategy(), { optional: true }) ?? (() => undefined)
