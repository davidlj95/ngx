import { ImageOpenGraphMetadata } from './image-open-graph-metadata'
import { TestBed } from '@angular/core/testing'
import { MockProviders } from 'ng-mocks'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { OpenGraphImage } from './open-graph-image'

describe('Image Open Graph metadata', () => {
  enableAutoSpy()
  let sut: ImageOpenGraphMetadata
  let metaService: jasmine.SpyObj<MetaService>

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(MetaService) as jasmine.SpyObj<MetaService>
  })

  const image = {
    url: 'https://example.com/foo.png',
    alt: 'Alternative text',
    secureUrl: 'https://example.com/secure/foo.png',
    type: 'image/png',
    width: 875,
    height: 875,
  } satisfies OpenGraphImage

  describe('set', () => {
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
})

function makeSut(): ImageOpenGraphMetadata {
  TestBed.configureTestingModule({
    providers: [ImageOpenGraphMetadata, MockProviders(MetaService)],
  })
  return TestBed.inject(ImageOpenGraphMetadata)
}
