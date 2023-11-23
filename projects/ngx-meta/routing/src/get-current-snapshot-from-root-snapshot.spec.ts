import { getCurrentSnapshotFromRootSnapshot } from './get-current-snapshot-from-root-snapshot'
import { MockService } from 'ng-mocks'
import { ActivatedRouteSnapshot } from '@angular/router'

describe('currentRouteSnapshot', () => {
  it('returns current route snapshot (last child)', () => {
    const dummyRouteSnapshot = MockService(ActivatedRouteSnapshot)
    const rootSnapshot = MockService(ActivatedRouteSnapshot, {
      firstChild: {
        firstChild: { firstChild: dummyRouteSnapshot },
      },
    } as Partial<ActivatedRouteSnapshot>)

    expect(getCurrentSnapshotFromRootSnapshot(rootSnapshot)).toEqual(
      dummyRouteSnapshot,
    )
  })
})
