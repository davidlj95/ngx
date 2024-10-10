import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import {
  NgxMetaElementsService,
  NgxMetaMetadataManager,
} from '@davidlj95/ngx-meta/core'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { OpenGraphImage } from './open-graph-image'
import { OpenGraph } from '../../types'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'
import { OPEN_GRAPH_IMAGE_METADATA_PROVIDER } from './open-graph-image-metadata-provider'

describe('Open Graph image metadata manager', () => {
  enableAutoSpy()
  let sut: NgxMetaMetadataManager<OpenGraph['image']>
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
    secureUrl: 'https://example.com/secure/foo.png',
    type: 'image/png',
    width: 875,
    height: 875,
  } satisfies OpenGraphImage

  const imageKeys = Object.keys(image) as ReadonlyArray<keyof OpenGraphImage>
  const imageKeyToProperty = (key: keyof OpenGraphImage) => {
    const mappings = new Map<keyof OpenGraphImage, string | undefined>([
      ['url', ''],
      ['secureUrl', 'secure_url'],
    ])
    return [`og:image`, mappings.get(key) ?? key].filter((x) => !!x).join(':')
  }

  describe('when url is provided', () => {
    it('should set all meta properties', () => {
      sut.set(image)

      expect(metaElementsService.set).toHaveBeenCalledTimes(imageKeys.length)
      expect(metaElementsService.set).toHaveBeenCalledWith(
        ['property', 'og:image'],
        { content: image.url },
      )
      expect(metaElementsService.set).toHaveBeenCalledWith(
        ['property', 'og:image:alt'],
        { content: image.alt },
      )
      expect(metaElementsService.set).toHaveBeenCalledWith(
        ['property', 'og:image:secure_url'],
        { content: image.secureUrl },
      )
      expect(metaElementsService.set).toHaveBeenCalledWith(
        ['property', 'og:image:type'],
        { content: image.type },
      )
      expect(metaElementsService.set).toHaveBeenCalledWith(
        ['property', 'og:image:width'],
        { content: image.width.toString() },
      )
      expect(metaElementsService.set).toHaveBeenCalledWith(
        ['property', 'og:image:height'],
        { content: image.height.toString() },
      )
    })
  })

  describe('when no url is defined', () => {
    it('should remove all meta properties', () => {
      sut.set({ ...image, url: undefined })

      imageKeys.forEach((key) => {
        expect(metaElementsService.set).toHaveBeenCalledWith(
          ['property', imageKeyToProperty(key)],
          undefined,
        )
      })
    })
  })
})

function makeSut(): NgxMetaMetadataManager<OpenGraph['image']> {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(NgxMetaElementsService),
      OPEN_GRAPH_IMAGE_METADATA_PROVIDER,
    ],
  })
  return injectOneMetadataManager()
}
