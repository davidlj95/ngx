import { MockService } from 'ng-mocks'
import { ActivatedRouteSnapshot } from '@angular/router'
import {
  CURRENT_ROUTE_DATA_METADATA_ROUTE_STRATEGY,
  ROUTING_KEY,
} from './current-route-data-metadata-strategy'

describe('Current route data metadata strategy', () => {
  const sut = CURRENT_ROUTE_DATA_METADATA_ROUTE_STRATEGY

  describe('resolve', () => {
    it('returns current route snapshot (last child)', () => {
      const dummyRouteMetadata = { title: 'dummy' }
      const rootSnapshot = MockService(ActivatedRouteSnapshot, {
        firstChild: {
          firstChild: {
            firstChild: MockService(ActivatedRouteSnapshot, {
              data: { [ROUTING_KEY]: dummyRouteMetadata },
            }),
          },
        },
      } as Partial<ActivatedRouteSnapshot>)
      expect(sut(rootSnapshot)).toEqual(dummyRouteMetadata)
    })
  })
})
