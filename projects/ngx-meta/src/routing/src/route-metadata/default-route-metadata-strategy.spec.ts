import { MockProvider, MockService } from 'ng-mocks'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { TestBed } from '@angular/core/testing'
import { NgxMetaRouteData } from './ngx-meta-route-data'
import { _routeMetadataStrategy } from '../../../core'
import { DEFAULT_ROUTE_METADATA_STRATEGY_PROVIDER } from './default-route-metadata-strategy'

describe('Default route metadata strategy', () => {
  it('returns current route snapshot metadata key', () => {
    const dummyRouteMetadata = { title: 'dummy' }
    const activatedRouteSnapshot = MockService(ActivatedRouteSnapshot, {
      firstChild: {
        firstChild: {
          firstChild: MockService(ActivatedRouteSnapshot, {
            data: { meta: dummyRouteMetadata } satisfies NgxMetaRouteData,
          }),
        },
      },
    } as Partial<ActivatedRouteSnapshot>)
    const sut = makeSut({ activatedRouteSnapshot })

    expect(sut()).toEqual(dummyRouteMetadata)
  })
})

const makeSut = (opts: { activatedRouteSnapshot: ActivatedRouteSnapshot }) => {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(ActivatedRoute, { snapshot: opts.activatedRouteSnapshot }),
      DEFAULT_ROUTE_METADATA_STRATEGY_PROVIDER,
    ],
  })
  return TestBed.inject(_routeMetadataStrategy())
}
