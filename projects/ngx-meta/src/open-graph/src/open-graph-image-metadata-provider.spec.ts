import { TestBed } from '@angular/core/testing'
import { MockProviders } from 'ng-mocks'
import { MetadataSetter, NgxMetaMetaService } from '@davidlj95/ngx-meta/core'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { OpenGraphImage } from './open-graph-image'
import { OpenGraph } from './open-graph'
import { __OPEN_GRAPH_IMAGE_SETTER_FACTORY } from './open-graph-image-metadata-provider'

describe('Open Graph image metadata', () => {
  enableAutoSpy()
  let sut: MetadataSetter<OpenGraph['image']>
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

  describe('setter', () => {
    describe('when url is provided', () => {
      describe('when the url does not start with http or https', () => {
        it('should log an error to the console', () => {
          spyOn(console, 'error')

          const invalidImageUrl = 'ftp://ftp.example.com/images/og.jpg'
          sut({ ...image, url: invalidImageUrl })

          expect(console.error).toHaveBeenCalledWith(
            jasmine.stringMatching(/http or https/),
            invalidImageUrl,
          )
        })
      })

      describe('when the url is valid', () => {
        it('should not error', () => {
          spyOn(console, 'error')

          sut(image)

          expect(console.error).not.toHaveBeenCalled()
        })
        it('should set all meta properties', () => {
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
    })
    describe('when no url is defined', () => {
      it('should not log any error', () => {
        spyOn(console, 'error')

        sut({ ...image, url: undefined })

        expect(console.error).not.toHaveBeenCalled()
      })

      it('should remove all meta properties', () => {
        sut({ ...image, url: undefined })

        const props = Object.keys(image).length
        expect(metaService.set).toHaveBeenCalledTimes(props)
        for (let i = 0; i < props; i++) {
          expect(metaService.set).toHaveBeenCalledWith(jasmine.anything(), null)
        }
      })
    })
  })
})

function makeSut(): MetadataSetter<OpenGraph['image']> {
  TestBed.configureTestingModule({
    providers: [MockProviders(NgxMetaMetaService)],
  })
  return __OPEN_GRAPH_IMAGE_SETTER_FACTORY(TestBed.inject(NgxMetaMetaService))
}
