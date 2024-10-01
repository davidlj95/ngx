import { inject, InjectionToken } from '@angular/core'
import { MetadataValues } from '../metadata-values'

/**
 * @internal
 */
export const _ROUTE_METADATA_STRATEGY =
  new InjectionToken<_RouteMetadataStrategy>(
    ngDevMode ? 'NgxMeta Route metadata strategy' : 'NgxMetaRMS',
  )

/**
 * @internal
 */
export type _RouteMetadataStrategy = () => MetadataValues | undefined

/**
 * @internal
 */
export const _injectRouteMetadataStrategy: () => _RouteMetadataStrategy = () =>
  inject(_ROUTE_METADATA_STRATEGY, { optional: true }) ?? (() => undefined)
