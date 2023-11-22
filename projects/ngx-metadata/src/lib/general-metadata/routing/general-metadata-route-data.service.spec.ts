import { TestBed } from '@angular/core/testing'

import { GeneralMetadataRouteDataService } from './general-metadata-route-data.service'
import { MockProvider } from 'ng-mocks'
import { GeneralMetadata } from '../general-metadata'
import { DefaultsService } from '../../common/defaults.service'
import { GENERAL_METADATA_DEFAULTS_TOKEN } from '../general-metadata-defaults-token'
import { Provider } from '@angular/core'
import { MetadataRouteStrategy } from '../../routing/metadata-route-strategy'
import { ActivatedRouteSnapshot } from '@angular/router'
import { DefaultGeneralMetadataRouteStrategy } from './default-general-metadata-route-strategy'
import { GeneralMetadataRouteStrategy } from './general-metadata-route-strategy'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'

describe('GeneralMetadataRouteDataService', () => {
  enableAutoSpy()

  describe('resolve', () => {
    const routeSnapshot = {} as unknown as ActivatedRouteSnapshot
    const dummyMetadata: GeneralMetadata = { title: 'Foo page' }

    describe('when no defaults available', () => {
      let sut: GeneralMetadataRouteDataService
      let generalMetadataRouteStrategy: jasmine.SpyObj<GeneralMetadataRouteStrategy>

      beforeEach(() => {
        sut = makeSut()
        generalMetadataRouteStrategy = TestBed.inject(
          GeneralMetadataRouteStrategy,
        ) as jasmine.SpyObj<MetadataRouteStrategy<GeneralMetadata>>
      })

      describe('when no data has been resolved for route', () => {
        beforeEach(() => {
          generalMetadataRouteStrategy.resolve.and.returnValue(undefined)
        })

        it('should return nothing', () => {
          expect(sut.resolve(routeSnapshot)).toEqual(undefined)
        })
      })

      describe('when data has been resolved for route', () => {
        beforeEach(() => {
          generalMetadataRouteStrategy.resolve.and.returnValue(dummyMetadata)
        })

        it('should return that data', () => {
          expect(sut.resolve(routeSnapshot)).toEqual(dummyMetadata)
        })
      })
    })

    describe('when defaults available', () => {
      const defaults: GeneralMetadata = {
        description: 'Lorem ipsum default description',
      }
      let sut: GeneralMetadataRouteDataService
      let generalMetadataRouteStrategy: jasmine.SpyObj<GeneralMetadataRouteStrategy>
      let defaultsService: jasmine.SpyObj<DefaultsService>

      beforeEach(() => {
        sut = makeSut({ defaults })
        generalMetadataRouteStrategy = TestBed.inject(
          GeneralMetadataRouteStrategy,
        ) as jasmine.SpyObj<MetadataRouteStrategy<GeneralMetadata>>
        defaultsService = TestBed.inject(
          DefaultsService,
        ) as jasmine.SpyObj<DefaultsService>
      })

      describe('when no data has been resolved for route', () => {
        beforeEach(() => {
          generalMetadataRouteStrategy.resolve.and.returnValue(undefined)
        })

        it('should return defaults', () => {
          expect(sut.resolve(routeSnapshot)).toEqual(defaults)
        })
      })

      describe('when data has been resolved for route', () => {
        const dummyResolvedDefaults = { ...defaults, ...dummyMetadata }

        beforeEach(() => {
          generalMetadataRouteStrategy.resolve.and.returnValue(dummyMetadata)
          defaultsService.resolve.and.returnValue(dummyResolvedDefaults)
        })

        it('should return defaults resolved with route data', () => {
          expect(sut.resolve(routeSnapshot)).toEqual(dummyResolvedDefaults)
        })
      })
    })
  })
})

function makeSut(
  opts: { defaults?: GeneralMetadata } = {},
): GeneralMetadataRouteDataService {
  const providers: Provider[] = [
    GeneralMetadataRouteDataService,
    MockProvider(DefaultsService),
    MockProvider(DefaultGeneralMetadataRouteStrategy),
    {
      provide: GeneralMetadataRouteStrategy,
      useExisting: DefaultGeneralMetadataRouteStrategy,
    },
  ]

  if (opts.defaults) {
    providers.push(
      MockProvider(GENERAL_METADATA_DEFAULTS_TOKEN, opts.defaults, 'useValue'),
    )
  }

  TestBed.configureTestingModule({
    providers,
  })
  return TestBed.inject(GeneralMetadataRouteDataService)
}
