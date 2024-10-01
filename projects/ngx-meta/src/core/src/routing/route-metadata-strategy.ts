import { inject, InjectionToken } from '@angular/core'
import { MetadataValues } from '../service'

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

export const injectRouteMetadataStrategy: () => _RouteMetadataStrategy = () =>
  inject(_ROUTE_METADATA_STRATEGY, { optional: true }) ?? (() => undefined)
