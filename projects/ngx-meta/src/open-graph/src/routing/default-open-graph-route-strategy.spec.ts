import { TestBed } from '@angular/core/testing'
import { DefaultOpenGraphRouteStrategy } from './default-open-graph-route-strategy'
import { MockProvider, MockService } from 'ng-mocks'
import { OpenGraph } from '../open-graph'
import { OpenGraphType } from '../open-graph-type'
import { ActivatedRouteSnapshot } from '@angular/router'
import { Provider } from '@angular/core'
import { OpenGraphService } from '../open-graph.service'
import {
  _GeneralMetadataRouteDataService,
  GeneralMetadata,
} from '@davidlj95/ngx-meta/general-metadata'
import { _DefaultsService } from '@davidlj95/ngx-meta/common'
import { _CurrentRouteDataKeyPathMetadataStrategy } from '@davidlj95/ngx-meta/routing'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'

describe('DefaultOpenGraphRouteStrategy', () => {
  enableAutoSpy()

  const dummyMetadata: OpenGraph = {
    title: 'Foo',
    type: OpenGraphType.Website,
  }

  describe('resolve', () => {
    const dummyRouteSnapshot: ActivatedRouteSnapshot = MockService(
      ActivatedRouteSnapshot,
    )

    it('should resolve route data using proper key path', () => {
      const sut = makeSut()
      const currentRouteDataKeyPathMetadataStrategy = TestBed.inject(
        _CurrentRouteDataKeyPathMetadataStrategy,
      ) as jasmine.SpyObj<_CurrentRouteDataKeyPathMetadataStrategy>
      currentRouteDataKeyPathMetadataStrategy.resolve.and.returnValue(
        dummyMetadata,
      )

      sut.resolve(dummyRouteSnapshot)

      expect(
        currentRouteDataKeyPathMetadataStrategy.resolve,
      ).toHaveBeenCalledOnceWith(dummyRouteSnapshot, 'openGraph')
    })

    describe('when no general metadata route data service is provided', () => {
      it('should return metadata from route using simple strategy', () => {
        const sut = makeSut()
        const currentRouteDataKeyPathMetadataStrategy = TestBed.inject(
          _CurrentRouteDataKeyPathMetadataStrategy,
        ) as jasmine.SpyObj<_CurrentRouteDataKeyPathMetadataStrategy>
        currentRouteDataKeyPathMetadataStrategy.resolve.and.returnValue(
          dummyMetadata,
        )

        expect(sut.resolve(dummyRouteSnapshot)).toEqual(dummyMetadata)
      })
    })

    describe('when general metadata route data service is provided', () => {
      const openGraphMetadata: OpenGraph = {
        title: 'open graph title',
        image: {
          type: 'image/png',
          width: 512,
          height: 512,
        },
        type: OpenGraphType.Website,
      }
      const compatibleGeneralMetadata: GeneralMetadata = {
        title: 'general metadata title',
        description: 'general metadata description',
        image: {
          url: 'general metadata image url',
          alt: 'general metadata image alt',
        },
        locale: 'general metadata locale',
        canonicalUrl: 'general metadata canonical URL',
        applicationName: 'general metadata application name',
      }
      let sut: DefaultOpenGraphRouteStrategy
      let currentRouteDataKeyPathMetadataStrategy: jasmine.SpyObj<_CurrentRouteDataKeyPathMetadataStrategy>

      beforeEach(() => {
        sut = makeSut({ generalMetadata: true })
        const generalMetadataRouteDataService = TestBed.inject(
          _GeneralMetadataRouteDataService,
        ) as jasmine.SpyObj<_GeneralMetadataRouteDataService>
        generalMetadataRouteDataService.resolve.and.returnValue(
          compatibleGeneralMetadata,
        )
        currentRouteDataKeyPathMetadataStrategy = TestBed.inject(
          _CurrentRouteDataKeyPathMetadataStrategy,
        ) as jasmine.SpyObj<_CurrentRouteDataKeyPathMetadataStrategy>
      })

      describe('when no open graph data can be resolved', () => {
        beforeEach(() => {
          currentRouteDataKeyPathMetadataStrategy.resolve.and.returnValue(
            undefined,
          )
        })

        it('should return compatible general metadata', () => {
          expect(sut.resolve(dummyRouteSnapshot)).toEqual({
            title: compatibleGeneralMetadata.title,
            description: compatibleGeneralMetadata.description,
            image: compatibleGeneralMetadata.image,
            locale: compatibleGeneralMetadata.locale,
            url: compatibleGeneralMetadata.canonicalUrl,
            siteName: compatibleGeneralMetadata.applicationName,
          })
        })
      })

      describe('when open graph data can be resolved', () => {
        beforeEach(() => {
          currentRouteDataKeyPathMetadataStrategy.resolve.and.returnValue(
            openGraphMetadata,
          )
        })

        it('should return open graph data with compatible general metadata as defaults', () => {
          expect(sut.resolve(dummyRouteSnapshot)).toEqual({
            title: openGraphMetadata.title,
            description: compatibleGeneralMetadata.description,
            image: {
              url: compatibleGeneralMetadata.image?.url,
              alt: compatibleGeneralMetadata.image?.alt,
              type: openGraphMetadata.image?.type,
              width: openGraphMetadata.image?.width,
              height: openGraphMetadata.image?.height,
            },
            type: openGraphMetadata.type,
            locale: compatibleGeneralMetadata.locale,
            url: compatibleGeneralMetadata.canonicalUrl,
            siteName: compatibleGeneralMetadata.applicationName,
          })
        })
      })
    })
  })

  describe('apply', () => {
    let sut: DefaultOpenGraphRouteStrategy
    let openGraphService: jasmine.SpyObj<OpenGraphService>

    beforeEach(() => {
      sut = makeSut()
      openGraphService = TestBed.inject(
        OpenGraphService,
      ) as jasmine.SpyObj<OpenGraphService>
    })

    describe('when no metadata provided', () => {
      it('should call open graph card service with empty data', () => {
        sut.apply(undefined)

        expect(openGraphService.apply).toHaveBeenCalledOnceWith({})
      })
    })

    describe('when metadata provided', () => {
      it('should call open graph card service with provided data', () => {
        sut.apply(dummyMetadata)

        expect(openGraphService.apply).toHaveBeenCalledOnceWith(dummyMetadata)
      })
    })
  })
})

function makeSut(opts: { generalMetadata?: boolean } = {}) {
  const providers: Provider[] = [
    DefaultOpenGraphRouteStrategy,
    MockProvider(_CurrentRouteDataKeyPathMetadataStrategy),
    _DefaultsService,
    MockProvider(OpenGraphService),
  ]

  if (opts.generalMetadata) {
    providers.push(MockProvider(_GeneralMetadataRouteDataService))
  }

  TestBed.configureTestingModule({
    providers,
  })
  return TestBed.inject(DefaultOpenGraphRouteStrategy)
}
