import { ActivatedRouteSnapshot } from '@angular/router'
import { InjectionToken } from '@angular/core'

export function getCurrentSnapshotFromRootSnapshot(
  rootSnapshot: ActivatedRouteSnapshot,
): ActivatedRouteSnapshot {
  if (!rootSnapshot.firstChild) {
    return rootSnapshot
  }
  return getCurrentSnapshotFromRootSnapshot(rootSnapshot.firstChild)
}

export type GetCurrentSnapshotFromRootSnapshot =
  typeof getCurrentSnapshotFromRootSnapshot

export const GET_CURRENT_SNAPSHOT_FROM_ROOT_SNAPSHOT_TOKEN =
  new InjectionToken<GetCurrentSnapshotFromRootSnapshot>(
    ngDevMode ? 'Current route snapshot helper' : 'NgxMetaGCSFRS',
    {
      factory: () => getCurrentSnapshotFromRootSnapshot,
      providedIn: 'root',
    },
  )
