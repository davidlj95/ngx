import { ActivatedRouteSnapshot } from '@angular/router'
import { MetadataRouteStrategy } from './metadata-route-strategy'
import { MetadataRouteData } from './metadata-route-data'

export const CURRENT_ROUTE_DATA_METADATA_ROUTE_STRATEGY: MetadataRouteStrategy =
  (activatedRouteSnapshot) => {
    let currentRouteSnapshot: ActivatedRouteSnapshot = activatedRouteSnapshot
    while (currentRouteSnapshot.firstChild != null) {
      currentRouteSnapshot = currentRouteSnapshot.firstChild
    }
    return currentRouteSnapshot.data[ROUTING_KEY]
  }

export const ROUTING_KEY: keyof MetadataRouteData = 'meta'
