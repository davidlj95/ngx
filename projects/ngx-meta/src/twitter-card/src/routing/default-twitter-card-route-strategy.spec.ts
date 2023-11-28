import { TestBed } from '@angular/core/testing'
import { DefaultTwitterCardRouteStrategy } from './default-twitter-card-route-strategy'
import { MockProvider, MockService } from 'ng-mocks'
import { ActivatedRouteSnapshot } from '@angular/router'
import { Provider } from '@angular/core'
import { TwitterCard } from '../twitter-card'
import { TwitterCardType } from '../twitter-card-type'
import { TwitterCardService } from '../twitter-card.service'
import {
  _GeneralMetadataRouteDataService,
  GeneralMetadata,
} from '@davidlj95/ngx-meta/general-metadata'
import { _DefaultsService } from '@davidlj95/ngx-meta/common'
import { _CurrentRouteDataKeyPathMetadataStrategy } from '@davidlj95/ngx-meta/routing'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'

describe('DefaultTwitterCardRouteStrategy', () => {
  enableAutoSpy()

  const dummyMetadata: TwitterCard = {
    card: TwitterCardType.Summary,
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
      ).toHaveBeenCalledOnceWith(dummyRouteSnapshot, 'twitterCard')
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
      const twitterCardMetadata: TwitterCard = {
        title: 'twitter card title',
        card: TwitterCardType.Summary,
      }
      const compatibleGeneralMetadata: GeneralMetadata = {
        title: 'general metadata title',
        description: 'general metadata description',
        image: {
          url: 'general metadata image url',
          alt: 'general metadata image alt',
        },
      }
      let sut: DefaultTwitterCardRouteStrategy
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

      describe('when no twitter card data can be resolved', () => {
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
          })
        })
      })

      describe('when twitter card data can be resolved', () => {
        beforeEach(() => {
          currentRouteDataKeyPathMetadataStrategy.resolve.and.returnValue(
            twitterCardMetadata,
          )
        })

        it('should return twitter card data with compatible general metadata as defaults', () => {
          expect(sut.resolve(dummyRouteSnapshot)).toEqual({
            title: twitterCardMetadata.title,
            card: twitterCardMetadata.card,
            description: compatibleGeneralMetadata.description,
            image: compatibleGeneralMetadata.image,
          })
        })
      })
    })
  })

  describe('apply', () => {
    let sut: DefaultTwitterCardRouteStrategy
    let twitterCardService: jasmine.SpyObj<TwitterCardService>

    beforeEach(() => {
      sut = makeSut()
      twitterCardService = TestBed.inject(
        TwitterCardService,
      ) as jasmine.SpyObj<TwitterCardService>
    })

    describe('when no metadata provided', () => {
      it('should call twitter card service with empty data', () => {
        sut.apply(undefined)

        expect(twitterCardService.apply).toHaveBeenCalledOnceWith({})
      })
    })

    describe('when metadata provided', () => {
      it('should call twitter card service with provided data', () => {
        sut.apply(dummyMetadata)

        expect(twitterCardService.apply).toHaveBeenCalledOnceWith(dummyMetadata)
      })
    })
  })
})

function makeSut(opts: { generalMetadata?: boolean } = {}) {
  const providers: Provider[] = [
    DefaultTwitterCardRouteStrategy,
    MockProvider(_CurrentRouteDataKeyPathMetadataStrategy),
    _DefaultsService,
    MockProvider(TwitterCardService),
  ]

  if (opts.generalMetadata) {
    providers.push(MockProvider(_GeneralMetadataRouteDataService))
  }

  TestBed.configureTestingModule({
    providers,
  })
  return TestBed.inject(DefaultTwitterCardRouteStrategy)
}
