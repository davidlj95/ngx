import { InjectionToken } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'
import { MetadataValues } from '@davidlj95/ngx-meta/core'
import { NgxMetaRouteData } from './ngx-meta-route-data'

export const ROUTE_METADATA_STRATEGY =
  new InjectionToken<RouteMetadataStrategy>(
    ngDevMode ? 'NgxMeta Route Metadata Strategy' : 'NgxMetaRS',
    {
      factory: () => (activatedRouteSnapshot) => {
        let currentRouteSnapshot: ActivatedRouteSnapshot =
          activatedRouteSnapshot
        while (currentRouteSnapshot.firstChild != null) {
          currentRouteSnapshot = currentRouteSnapshot.firstChild
        }
        return currentRouteSnapshot.data[
          'meta' satisfies keyof NgxMetaRouteData
        ]
      },
    },
  )

export type RouteMetadataStrategy = (
  activatedRouteSnapshot: ActivatedRouteSnapshot,
) => MetadataValues | undefined
