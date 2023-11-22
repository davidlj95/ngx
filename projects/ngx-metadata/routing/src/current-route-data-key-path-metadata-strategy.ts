import { ActivatedRouteSnapshot } from '@angular/router'
import { Inject, Injectable } from '@angular/core'
import {
  GET_CURRENT_SNAPSHOT_FROM_ROOT_SNAPSHOT_TOKEN,
  GetCurrentSnapshotFromRootSnapshot,
} from './get-current-snapshot-from-root-snapshot'

@Injectable()
export class CurrentRouteDataKeyPathMetadataStrategy {
  constructor(
    @Inject(GET_CURRENT_SNAPSHOT_FROM_ROOT_SNAPSHOT_TOKEN)
    private readonly getCurrentSnapshotFromRootSnapshot: GetCurrentSnapshotFromRootSnapshot,
  ) {}

  resolve<T extends object>(
    routeSnapshot: ActivatedRouteSnapshot,
    keyPath: string,
  ): T | undefined {
    const currentRoute = this.getCurrentSnapshotFromRootSnapshot(routeSnapshot)
    const keys = [ROUTING_KEY, ...keyPath.split(ROUTING_KEY_SEPARATOR)]
    let object = currentRoute.data
    for (const key of keys) {
      if (object === undefined) {
        return
      }
      object = object[key]
    }
    return object as T
  }
}

export const ROUTING_KEY_SEPARATOR = '.'
export const ROUTING_KEY = 'meta'
