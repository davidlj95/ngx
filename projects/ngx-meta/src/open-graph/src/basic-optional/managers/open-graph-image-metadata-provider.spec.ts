import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import {
  NgxMetaMetadataManager,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { OpenGraphImage } from './open-graph-image'
import { OpenGraph } from '../../types'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'
import { OPEN_GRAPH_IMAGE_METADATA_PROVIDER } from './open-graph-image-metadata-provider'

describe('Open Graph image metadata manager', () => {
  enableAutoSpy()
  let sut: NgxMetaMetadataManager<OpenGraph['image']>
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
    secureUrl: 'https://example.com/secure/foo.png',
    type: 'image/png',
    width: 875,
    height: 875,
  } satisfies OpenGraphImage

  describe('when url is provided', () => {
    it('should set all meta properties', () => {
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
      expect(metaService.set).toHaveBeenCalledWith(
        jasmine.anything(),
        image.secureUrl,
      )
      expect(metaService.set).toHaveBeenCalledWith(
        jasmine.anything(),
        image.type,
      )
      expect(metaService.set).toHaveBeenCalledWith(
        jasmine.anything(),
        image.width.toString(),
      )
      expect(metaService.set).toHaveBeenCalledWith(
        jasmine.anything(),
        image.height.toString(),
      )
    })
  })

  describe('when no url is defined', () => {
    it('should remove all meta properties', () => {
      sut.set({ ...image, url: undefined })

      const props = Object.keys(image).length
      expect(metaService.set).toHaveBeenCalledTimes(props)
      for (let i = 0; i < props; i++) {
        expect(metaService.set).toHaveBeenCalledWith(jasmine.anything(), null)
      }
    })
  })
})

function makeSut(): NgxMetaMetadataManager<OpenGraph['image']> {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(NgxMetaMetaService),
      OPEN_GRAPH_IMAGE_METADATA_PROVIDER,
    ],
  })
  return injectOneMetadataManager()
}
