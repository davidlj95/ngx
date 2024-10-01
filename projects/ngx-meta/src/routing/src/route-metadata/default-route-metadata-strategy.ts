import { inject, InjectionToken } from '@angular/core'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { _RouteMetadataStrategy } from '@davidlj95/ngx-meta/core'
import { NgxMetaRouteData } from './ngx-meta-route-data'

export const DEFAULT_ROUTE_METADATA_STRATEGY =
  new InjectionToken<_RouteMetadataStrategy>(
    ngDevMode ? 'NgxMeta Default route metadata strategy' : 'NgxMetaDRMS',
    {
      factory: () => {
        const activatedRoute = inject(ActivatedRoute)
        return () => {
          let currentRouteSnapshot: ActivatedRouteSnapshot =
            activatedRoute.snapshot
          while (currentRouteSnapshot.firstChild != null) {
            currentRouteSnapshot = currentRouteSnapshot.firstChild
          }
          return currentRouteSnapshot.data[
            'meta' satisfies keyof NgxMetaRouteData
          ]
        }
      },
    },
  )
