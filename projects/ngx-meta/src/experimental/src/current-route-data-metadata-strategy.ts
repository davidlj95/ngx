import { ActivatedRouteSnapshot } from '@angular/router'
import { Inject, Injectable } from '@angular/core'
import {
  GET_CURRENT_SNAPSHOT_FROM_ROOT_SNAPSHOT_TOKEN,
  GetCurrentSnapshotFromRootSnapshot,
} from './get-current-snapshot-from-root-snapshot'
import { MetadataRouteStrategy } from './metadata-route-strategy'
import { MetadataValues } from './metadata-values'
import { MetadataService } from './metadata.service'

@Injectable()
export class CurrentRouteDataMetadataStrategy
  implements MetadataRouteStrategy<MetadataValues>
{
  constructor(
    @Inject(GET_CURRENT_SNAPSHOT_FROM_ROOT_SNAPSHOT_TOKEN)
    private readonly getCurrentSnapshotFromRootSnapshot: GetCurrentSnapshotFromRootSnapshot,
    private readonly metadataService: MetadataService,
  ) {}

  resolve<T extends object>(
    routeSnapshot: ActivatedRouteSnapshot,
  ): T | undefined {
    const currentRoute = this.getCurrentSnapshotFromRootSnapshot(routeSnapshot)
    return currentRoute.data[ROUTING_KEY]
  }

  set(metadata: MetadataValues | undefined): void {
    this.metadataService.set(metadata)
  }
}
export const ROUTING_KEY = 'meta'
