import { MockService } from 'ng-mocks'
import { ActivatedRouteSnapshot } from '@angular/router'
import { TestBed } from '@angular/core/testing'
import { ROUTE_METADATA_STRATEGY } from './route-metadata-strategy'
import { NgxMetaRouteData } from './ngx-meta-route-data'

describe('Route metadata strategy', () => {
  it('returns current route snapshot metadata key', () => {
    const dummyRouteMetadata = { title: 'dummy' }
    const rootSnapshot = MockService(ActivatedRouteSnapshot, {
      firstChild: {
        firstChild: {
          firstChild: MockService(ActivatedRouteSnapshot, {
            data: { meta: dummyRouteMetadata } satisfies NgxMetaRouteData,
          }),
        },
      },
    } as Partial<ActivatedRouteSnapshot>)
    const sut = makeSut()

    expect(sut(rootSnapshot)).toEqual(dummyRouteMetadata)
  })
})

const makeSut = () => {
  TestBed.configureTestingModule({})
  return TestBed.inject(ROUTE_METADATA_STRATEGY)
}
