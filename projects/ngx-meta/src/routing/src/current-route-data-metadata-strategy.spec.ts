import { MockProvider, MockService } from 'ng-mocks'
import { ActivatedRouteSnapshot } from '@angular/router'
import { TestBed } from '@angular/core/testing'
import {
  CurrentRouteDataMetadataStrategy,
  ROUTING_KEY,
} from './current-route-data-metadata-strategy'
import { MetadataService } from '../../core'

describe('Current route data metadata strategy', () => {
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
      const sut = makeSut()

      expect(sut.resolve(rootSnapshot)).toEqual(dummyRouteMetadata)
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      CurrentRouteDataMetadataStrategy,
      MockProvider(MetadataService),
    ],
  })
  return TestBed.inject(CurrentRouteDataMetadataStrategy)
}
