import {
  CurrentRouteDataKeyPathMetadataStrategy,
  MAIN_KEY,
} from './current-route-data-key-path-metadata-strategy'
import { TestBed } from '@angular/core/testing'
import { MockProvider, MockService } from 'ng-mocks'
import { ActivatedRouteSnapshot } from '@angular/router'
import { GET_CURRENT_SNAPSHOT_FROM_ROOT_SNAPSHOT_TOKEN } from './get-current-snapshot-from-root-snapshot'
import { enableAutoSpy } from 'ngx-metadata/__tests__/enable-auto-spy'

describe('CurrentRouteDataKeyPathMetadataStrategy', () => {
  enableAutoSpy()

  describe('resolve', () => {
    const dummyRootRouteSnapshot = MockService(ActivatedRouteSnapshot)
    const dummyData = { key: 'value' }
    let sut: CurrentRouteDataKeyPathMetadataStrategy
    let currentSnapshot: ActivatedRouteSnapshot

    beforeEach(() => {
      currentSnapshot = MockService(ActivatedRouteSnapshot)

      sut = makeSut({
        currentSnapshot,
      })
    })

    describe('when key path does not contain dots', () => {
      const keyPath = 'key'

      beforeEach(() => {
        currentSnapshot.data = {
          [MAIN_KEY]: { [keyPath]: dummyData },
        }
      })

      it("should return the key of the current route data's metadata", () => {
        expect(sut.resolve(dummyRootRouteSnapshot, keyPath)).toEqual(dummyData)
      })
    })

    describe('when key path contains dots', () => {
      const firstKey = 'key'
      const secondKey = 'subKey'
      const keyPath = `${firstKey}.${secondKey}`

      describe('when path does not exist', () => {
        beforeEach(() => {
          currentSnapshot.data = {}
        })

        it('should return nothing', () => {
          expect(sut.resolve(dummyRootRouteSnapshot, keyPath)).toEqual(
            undefined,
          )
        })
      })

      describe('when path does exist', () => {
        beforeEach(() => {
          currentSnapshot.data = {
            [MAIN_KEY]: { [firstKey]: { [secondKey]: dummyData } },
          }
        })

        it('should return resolved metadata', () => {
          expect(sut.resolve(dummyRootRouteSnapshot, keyPath)).toEqual(
            dummyData,
          )
        })
      })
    })
  })
})

function makeSut(
  opts: {
    currentSnapshot?: ActivatedRouteSnapshot
  } = {},
) {
  TestBed.configureTestingModule({
    providers: [
      CurrentRouteDataKeyPathMetadataStrategy,
      MockProvider(
        GET_CURRENT_SNAPSHOT_FROM_ROOT_SNAPSHOT_TOKEN,
        () => opts.currentSnapshot ?? MockService(ActivatedRouteSnapshot),
        'useValue',
      ),
    ],
  })
  return TestBed.inject(CurrentRouteDataKeyPathMetadataStrategy)
}
