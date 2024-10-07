import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import {
  NgxMetaMetadataManager,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { TestBed } from '@angular/core/testing'
import { MockProviders } from 'ng-mocks'
import { TwitterCard } from '../types'
import { TWITTER_CARD_IMAGE_METADATA_PROVIDER } from './twitter-card-image-metadata-provider'
import { TwitterCardImage } from './twitter-card-image'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'

describe('Twitter Card image metadata manager', () => {
  enableAutoSpy()
  let sut: NgxMetaMetadataManager<TwitterCard['image']>
  let metaService: jasmine.SpyObj<NgxMetaMetaService>

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(
      NgxMetaMetaService,
    ) as jasmine.SpyObj<NgxMetaMetaService>
  })

  const image = {
    url: 'https://example.com/foo.png',
    alt: 'Alternative text',
  } satisfies TwitterCardImage

  describe('when image is provided', () => {
    it('should set all meta properties', () => {
      // noinspection DuplicatedCode
      sut.set(image)

      const props = Object.keys(image).length
      expect(metaService.set).toHaveBeenCalledTimes(props)
      expect(metaService.set).toHaveBeenCalledWith(
        jasmine.anything(),
        image.url,
      )
      expect(metaService.set).toHaveBeenCalledWith(
        jasmine.anything(),
        image.alt,
      )
    })
  })

  describe('when no image provided', () => {
    it('should remove all meta properties', () => {
      sut.set(undefined)

      const props = Object.keys(image).length
      expect(metaService.set).toHaveBeenCalledTimes(props)
      for (let i = 0; i < props; i++) {
        expect(metaService.set).toHaveBeenCalledWith(
          jasmine.anything(),
          undefined,
        )
      }
    })
  })
})

function makeSut(): NgxMetaMetadataManager<TwitterCard['image']> {
  TestBed.configureTestingModule({
    providers: [
      MockProviders(NgxMetaMetaService),
      TWITTER_CARD_IMAGE_METADATA_PROVIDER,
    ],
  })
  return injectOneMetadataManager()
}
