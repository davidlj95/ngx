import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import {
  NgxMetaElementsService,
  NgxMetaMetadataManager,
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
  let metaElementsService: jasmine.SpyObj<NgxMetaElementsService>

  beforeEach(() => {
    sut = makeSut()
    metaElementsService = TestBed.inject(
      NgxMetaElementsService,
    ) as jasmine.SpyObj<NgxMetaElementsService>
  })

  const image = {
    url: 'https://example.com/foo.png',
    alt: 'Alternative text',
  } satisfies TwitterCardImage
  const imageKeys = Object.keys(image) as ReadonlyArray<keyof TwitterCardImage>
  const imageKeyToProperty = (key: keyof TwitterCardImage) => {
    const mappings = new Map<keyof TwitterCardImage, string | undefined>([
      ['url', ''],
    ])
    return [`twitter:image`, mappings.get(key) ?? key]
      .filter((x) => !!x)
      .join(':')
  }

  describe('when image is provided', () => {
    it('should set all meta properties', () => {
      sut.set(image)

      expect(metaElementsService.set).toHaveBeenCalledWith(
        ['name', 'twitter:image'],
        { content: image.url },
      )
      expect(metaElementsService.set).toHaveBeenCalledWith(
        ['name', 'twitter:image:alt'],
        { content: image.alt },
      )
    })
  })

  describe('when no image provided', () => {
    it('should remove all meta properties', () => {
      sut.set(undefined)

      imageKeys.forEach((key) => {
        expect(metaElementsService.set).toHaveBeenCalledWith(
          ['name', imageKeyToProperty(key)],
          undefined,
        )
      })
    })
  })
})

function makeSut(): NgxMetaMetadataManager<TwitterCard['image']> {
  TestBed.configureTestingModule({
    providers: [
      MockProviders(NgxMetaElementsService),
      TWITTER_CARD_IMAGE_METADATA_PROVIDER,
    ],
  })
  return injectOneMetadataManager()
}
