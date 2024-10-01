import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { MetadataSetter, NgxMetaMetaService } from '@davidlj95/ngx-meta/core'
import { TestBed } from '@angular/core/testing'
import { MockProviders } from 'ng-mocks'
import { TwitterCard } from '../types'
import {
  TWITTER_CARD_IMAGE_METADATA_PROVIDER,
  TWITTER_CARD_IMAGE_METADATA_SETTER_FACTORY,
} from './twitter-card-image-metadata-provider'
import { TwitterCardImage } from './twitter-card-image'

describe('Twitter Card image metadata', () => {
  enableAutoSpy()
  let sut: MetadataSetter<TwitterCard['image']>
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
      sut(image)

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
      sut(undefined)

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

function makeSut(): MetadataSetter<TwitterCard['image']> {
  TestBed.configureTestingModule({
    providers: [
      MockProviders(NgxMetaMetaService),
      TWITTER_CARD_IMAGE_METADATA_PROVIDER,
    ],
  })
  return TWITTER_CARD_IMAGE_METADATA_SETTER_FACTORY(
    TestBed.inject(NgxMetaMetaService),
  )
}
