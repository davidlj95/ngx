import { TestBed } from '@angular/core/testing'

import { GeneralMetadataAppliersService } from './general-metadata-appliers.service'
import { Title } from '@angular/platform-browser'
import { MockProvider } from 'ng-mocks'
import { StandardMetaProperty } from './standard-meta-property'
import { VERSION } from '@angular/core'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'
import { GeneralMetadata } from './general-metadata'
import { GeneralMetadataImage } from './general-metadata-image'
import { LinkRelCanonicalService } from './link-rel-canonical/link-rel-canonical.service'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'
import { _MetaCommand, _MetaCommandService } from '@davidlj95/ngx-meta/common'

describe('GeneralMetadataAppliersService', () => {
  enableAutoSpy()

  let sut: GeneralMetadataAppliersService
  // noinspection DuplicatedCode
  let metaCommandService: _MetaCommandService

  beforeEach(() => {
    sut = makeSut()
    metaCommandService = TestBed.inject(_MetaCommandService)
  })

  describe('title', () => {
    let titleService: Title

    beforeEach(() => {
      titleService = TestBed.inject(Title)
    })

    describe('when title is not provided', () => {
      const title = undefined

      it('should not update title', () => {
        sut.title(title)

        expect(titleService.setTitle).not.toHaveBeenCalled()
      })

      it('should emit update notification', () => {
        let changeEvent: GeneralMetadata | undefined
        sut.changes$.subscribe((event) => {
          changeEvent = event
        })

        sut.title(title)

        expect(changeEvent).toEqual({ title })
      })
    })

    describe('when title is provided', () => {
      const title = 'Foo page'

      it('should update title', () => {
        sut.title(title)

        expect(titleService.setTitle).toHaveBeenCalledOnceWith(title)
      })

      it('should emit update notification', () => {
        let changeEvent: GeneralMetadata | undefined
        sut.changes$.subscribe((event) => {
          changeEvent = event
        })

        sut.title(title)

        expect(changeEvent).toEqual({ title })
      })
    })
  })

  describe('description', () => {
    const description = 'Lorem ipsum lorem'

    it('should apply meta command with its property and value', () => {
      sut.description(description)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(StandardMetaProperty.DESCRIPTION, description),
      )
    })

    it('should emit an update notification', () => {
      let changeEvent: GeneralMetadata | undefined
      sut.changes$.subscribe((event) => {
        changeEvent = event
      })

      sut.description(description)

      expect(changeEvent).toEqual({ description })
    })
  })

  describe('author', () => {
    const author = 'Mr. Foo'

    it('should apply meta command with its property and value', () => {
      sut.author(author)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(StandardMetaProperty.AUTHOR, author),
      )
    })
  })

  describe('keywords', () => {
    const keywords = ['Lorem', 'ipsum', 'lorem']

    it('should apply meta command with its property and keywords separated by comma', () => {
      sut.keywords(keywords)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(StandardMetaProperty.KEYWORDS, 'Lorem,ipsum,lorem'),
      )
    })
  })

  describe('generator', () => {
    describe('when true', () => {
      const generator = true

      it('should apply meta command with generator property and Angular version', () => {
        sut.generator(generator)

        expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
          new _MetaCommand(
            StandardMetaProperty.GENERATOR,
            `Angular v${VERSION.full}`,
          ),
        )
      })
    })

    describe('when false', () => {
      const generator = false

      it('should apply meta command with generator property and undefined content', () => {
        sut.generator(generator)

        expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
          new _MetaCommand(StandardMetaProperty.GENERATOR, undefined),
        )
      })
    })

    const otherGeneratorValues = [undefined, null]
    otherGeneratorValues.forEach((generator) => {
      describe(`when ${generator}`, () => {
        it(`should apply meta command with generator property and ${generator} content`, () => {
          sut.generator(generator)

          expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
            new _MetaCommand(StandardMetaProperty.GENERATOR, generator),
          )
        })
      })
    })
  })

  describe('application name', () => {
    const applicationName = 'Foo App'

    it('should apply meta command with its property and content', () => {
      sut.applicationName(applicationName)

      expect(metaCommandService.apply).toHaveBeenCalledWith(
        new _MetaCommand(
          StandardMetaProperty.APPLICATION_NAME,
          applicationName,
        ),
      )
    })

    it('should emit an update notification', () => {
      let changeEvent: GeneralMetadata | undefined
      sut.changes$.subscribe((event) => {
        changeEvent = event
      })

      sut.applicationName(applicationName)

      expect(changeEvent).toEqual({ applicationName })
    })
  })

  describe('canonical URL', () => {
    const canonicalUrl = 'https://example.com'
    let linkRelCanonicalService: LinkRelCanonicalService

    beforeEach(() => {
      linkRelCanonicalService = TestBed.inject(LinkRelCanonicalService)
    })

    it('should call canonical URL service', () => {
      sut.canonicalUrl(canonicalUrl)

      expect(linkRelCanonicalService.apply).toHaveBeenCalledOnceWith(
        canonicalUrl,
      )
    })

    it('should emit an update notification', () => {
      let changeEvent: GeneralMetadata | undefined
      sut.changes$.subscribe((event) => {
        changeEvent = event
      })

      sut.canonicalUrl(canonicalUrl)

      expect(changeEvent).toEqual({ canonicalUrl })
    })
  })

  describe('locale', () => {
    const locale = 'es-ES'
    let htmlLangAttributeService: HtmlLangAttributeService

    beforeEach(() => {
      htmlLangAttributeService = TestBed.inject(HtmlLangAttributeService)
    })

    it('should call HTML lang attribute service', () => {
      sut.locale(locale)

      expect(htmlLangAttributeService.apply).toHaveBeenCalledOnceWith(locale)
    })

    it('should emit an update notification', () => {
      let changeEvent: GeneralMetadata | undefined
      sut.changes$.subscribe((event) => {
        changeEvent = event
      })

      sut.locale(locale)

      expect(changeEvent).toEqual({ locale })
    })
  })

  describe('image', () => {
    const image: GeneralMetadataImage = {
      url: new URL('https://example.com/foo.png'),
      alt: 'Foo alternative text',
    }

    it('should emit an update notification', () => {
      let changeEvent: GeneralMetadata | undefined
      sut.changes$.subscribe((event) => {
        changeEvent = event
      })

      sut.image(image)

      expect(changeEvent).toEqual({ image })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      GeneralMetadataAppliersService,
      MockProvider(Title),
      MockProvider(_MetaCommandService),
      MockProvider(LinkRelCanonicalService),
      MockProvider(HtmlLangAttributeService),
    ],
  })

  return TestBed.inject(GeneralMetadataAppliersService)
}
