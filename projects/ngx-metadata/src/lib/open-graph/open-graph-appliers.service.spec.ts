import { TestBed } from '@angular/core/testing'

import { OpenGraphAppliersService } from './open-graph-appliers.service'
import { MetaCommand } from '../common/meta-command/meta-command'
import { MockProvider } from 'ng-mocks'
import { MetaCommandService } from '../common/meta-command/meta-command.service'
import { OpenGraphProperty } from './open-graph-property'
import { OpenGraphImage, OpenGraphType } from '.'
import { enableAutoSpy } from '../__tests__/enable-auto-spy'

describe('OpenGraphAppliersService', () => {
  enableAutoSpy()

  let sut: OpenGraphAppliersService
  // noinspection DuplicatedCode
  let metaCommandService: MetaCommandService

  beforeEach(() => {
    sut = makeSut()
    metaCommandService = TestBed.inject(MetaCommandService)
  })

  describe('title', () => {
    const title = 'Foo'

    it('should apply meta command with title property and content', () => {
      sut.title(title)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new MetaCommand(OpenGraphProperty.TITLE, title),
      )
    })
  })

  describe('type', () => {
    const type = OpenGraphType.Website

    it('should apply meta command with type property and content', () => {
      sut.type(type)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new MetaCommand(OpenGraphProperty.TYPE, type),
      )
    })
  })

  describe('image', () => {
    describe('when provided', () => {
      const image: OpenGraphImage = {
        url: new URL('https://example.com/foo.png'),
        alt: 'Foo logo',
        secureUrl: new URL('https://example.com/foo.png'),
        type: 'image/png',
        width: 512,
        height: 512,
      }

      it('should apply all meta commands with their properties and content', () => {
        sut.image(image)

        expect(metaCommandService.apply).toHaveBeenCalledTimes(
          Object.keys(image).length,
        )
        expect(metaCommandService.apply).toHaveBeenCalledWith(
          new MetaCommand(OpenGraphProperty.IMAGE, image.url?.toString()),
        )
        expect(metaCommandService.apply).toHaveBeenCalledWith(
          new MetaCommand(OpenGraphProperty.IMAGE_ALT, image.alt),
        )
        expect(metaCommandService.apply).toHaveBeenCalledWith(
          new MetaCommand(OpenGraphProperty.IMAGE_TYPE, image.type),
        )
        expect(metaCommandService.apply).toHaveBeenCalledWith(
          new MetaCommand(
            OpenGraphProperty.IMAGE_WIDTH,
            image.width?.toString(),
          ),
        )
        expect(metaCommandService.apply).toHaveBeenCalledWith(
          new MetaCommand(
            OpenGraphProperty.IMAGE_HEIGHT,
            image.height?.toString(),
          ),
        )
      })
    })

    describe('when not provided', () => {
      const image = null

      it('should apply meta command to remove all image properties', () => {
        sut.image(image)

        const imageProperties = OpenGraphProperty.images()
        expect(imageProperties.length).toBeGreaterThan(0)

        expect(metaCommandService.apply).toHaveBeenCalledTimes(
          imageProperties.length,
        )
        for (const imageProperty of imageProperties) {
          expect(metaCommandService.apply).toHaveBeenCalledWith(
            new MetaCommand(imageProperty, image),
          )
        }
      })
    })

    // 👇 For instance: image set by listening to general metadata. Then, more
    // attributes are added later
    describe('when URL or alt not provided', () => {
      const urlAndAltProperties = [
        OpenGraphProperty.IMAGE,
        OpenGraphProperty.IMAGE_ALT,
      ]
      const image: OpenGraphImage = {
        secureUrl: new URL('https://example.com/foo.png'),
        type: 'image/png',
        width: 512,
        height: 512,
      }

      it('should not update those properties', () => {
        sut.image(image)

        const imageProperties = OpenGraphProperty.images()
        expect(imageProperties.length).toBeGreaterThan(0)

        const imagePropertiesButUrlOrAlt = imageProperties.filter(
          (property) => !urlAndAltProperties.includes(property),
        )
        expect(imagePropertiesButUrlOrAlt.length).toBeGreaterThan(0)

        expect(metaCommandService.apply).toHaveBeenCalledTimes(
          imagePropertiesButUrlOrAlt.length,
        )
      })
    })
  })

  describe('URL', () => {
    const url = new URL('https://example.com/foo')

    it('should apply meta command with URL property and content', () => {
      sut.url(url)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new MetaCommand(OpenGraphProperty.URL, url.toString()),
      )
    })
  })

  describe('description', () => {
    const description = 'Lorem ipsum lorem'

    it('should apply meta command with description property and content', () => {
      sut.description(description)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new MetaCommand(OpenGraphProperty.DESCRIPTION, description),
      )
    })
  })

  describe('locale', () => {
    const locale = 'es'

    it('should apply meta command with locale property and content', () => {
      sut.locale(locale)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new MetaCommand(OpenGraphProperty.LOCALE, locale),
      )
    })
  })

  describe('siteName', () => {
    const siteName = 'Foo site'

    it('should apply meta command with site name property and content', () => {
      sut.siteName(siteName)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new MetaCommand(OpenGraphProperty.SITE_NAME, siteName),
      )
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [OpenGraphAppliersService, MockProvider(MetaCommandService)],
  })
  return TestBed.inject(OpenGraphAppliersService)
}
