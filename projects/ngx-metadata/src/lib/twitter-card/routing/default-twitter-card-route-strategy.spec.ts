import { TestBed } from '@angular/core/testing'
import { DefaultTwitterCardRouteStrategy } from './default-twitter-card-route-strategy'
import { MockProvider, MockService } from 'ng-mocks'
import { ActivatedRouteSnapshot } from '@angular/router'
import { GeneralMetadataRouteDataService } from '../../general-metadata/routing/general-metadata-route-data.service'
import { Provider } from '@angular/core'
import { GeneralMetadata } from '../../general-metadata'
import { DefaultsService } from '../../common/defaults.service'
import { TwitterCard } from '../twitter-card'
import { TwitterCardType } from '../twitter-card-type'
import { CurrentRouteDataKeyPathMetadataStrategy } from '../../routing/current-route-data-key-path-metadata-strategy'
import { TwitterCardService } from '../twitter-card.service'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'

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
        CurrentRouteDataKeyPathMetadataStrategy,
      ) as jasmine.SpyObj<CurrentRouteDataKeyPathMetadataStrategy>
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
          CurrentRouteDataKeyPathMetadataStrategy,
        ) as jasmine.SpyObj<CurrentRouteDataKeyPathMetadataStrategy>
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
      let currentRouteDataKeyPathMetadataStrategy: jasmine.SpyObj<CurrentRouteDataKeyPathMetadataStrategy>

      beforeEach(() => {
        sut = makeSut({ generalMetadata: true })
        const generalMetadataRouteDataService = TestBed.inject(
          GeneralMetadataRouteDataService,
        ) as jasmine.SpyObj<GeneralMetadataRouteDataService>
        generalMetadataRouteDataService.resolve.and.returnValue(
          compatibleGeneralMetadata,
        )
        currentRouteDataKeyPathMetadataStrategy = TestBed.inject(
          CurrentRouteDataKeyPathMetadataStrategy,
        ) as jasmine.SpyObj<CurrentRouteDataKeyPathMetadataStrategy>
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
    MockProvider(CurrentRouteDataKeyPathMetadataStrategy),
    DefaultsService,
    MockProvider(TwitterCardService),
  ]

  if (opts.generalMetadata) {
    providers.push(MockProvider(GeneralMetadataRouteDataService))
  }

  TestBed.configureTestingModule({
    providers,
  })
  return TestBed.inject(DefaultTwitterCardRouteStrategy)
}
