import { FactoryProvider } from '@angular/core'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { _routeMetadataStrategy } from '@davidlj95/ngx-meta/core'
import { NgxMetaRouteData } from './ngx-meta-route-data'

export const DEFAULT_ROUTE_METADATA_STRATEGY_PROVIDER: FactoryProvider = {
  provide: _routeMetadataStrategy(),
  useFactory: (activatedRoute: ActivatedRoute) => () => {
    let currentRouteSnapshot: ActivatedRouteSnapshot = activatedRoute.snapshot
    while (currentRouteSnapshot.firstChild != null) {
      currentRouteSnapshot = currentRouteSnapshot.firstChild
    }
    return currentRouteSnapshot.data['meta' satisfies keyof NgxMetaRouteData]
  },
  deps: [ActivatedRoute],
}
