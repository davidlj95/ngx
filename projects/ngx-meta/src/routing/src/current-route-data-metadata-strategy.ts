import { ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { MetadataRouteStrategy } from './metadata-route-strategy'
import { MetadataService, MetadataValues } from '@davidlj95/ngx-meta/core'
import { MetadataRouteData } from './metadata-route-data'

@Injectable({ providedIn: 'root' })
export class CurrentRouteDataMetadataStrategy implements MetadataRouteStrategy {
  constructor(private readonly metadataService: MetadataService) {}

  resolve<T extends object>(
    routeSnapshot: ActivatedRouteSnapshot,
  ): T | undefined {
    let currentRouteSnapshot: ActivatedRouteSnapshot = routeSnapshot
    while (currentRouteSnapshot.firstChild != null) {
      currentRouteSnapshot = currentRouteSnapshot.firstChild
    }
    return currentRouteSnapshot.data[ROUTING_KEY]
  }

  set(metadata: MetadataValues | undefined): void {
    this.metadataService.set(metadata)
  }
}

export const ROUTING_KEY: keyof MetadataRouteData = 'meta'
