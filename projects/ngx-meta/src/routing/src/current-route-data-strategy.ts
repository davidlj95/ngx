import { ActivatedRouteSnapshot } from '@angular/router'
import { NgxMetaRouteStrategy } from './ngx-meta-route-strategy'
import { NgxMetaRouteData } from './ngx-meta-route-data'

export const CURRENT_ROUTE_DATA_ROUTE_STRATEGY: NgxMetaRouteStrategy = (
  activatedRouteSnapshot,
) => {
  let currentRouteSnapshot: ActivatedRouteSnapshot = activatedRouteSnapshot
  while (currentRouteSnapshot.firstChild != null) {
    currentRouteSnapshot = currentRouteSnapshot.firstChild
  }
  return currentRouteSnapshot.data[ROUTING_KEY]
}

export const ROUTING_KEY: keyof NgxMetaRouteData = 'meta'
