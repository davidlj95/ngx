import { TestBed } from '@angular/core/testing'

import { TwitterCardAppliersService } from './twitter-card-appliers.service'
import { MockProvider } from 'ng-mocks'
import { TwitterCardType } from './twitter-card-type'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'
import { TwitterCardImage } from './twitter-card-image'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'
import { _MetaCommand, _MetaCommandService } from '@davidlj95/ngx-meta/common'

describe('TwitterCardAppliersService', () => {
  enableAutoSpy()

  let sut: TwitterCardAppliersService
  // noinspection DuplicatedCode
  let metaCommandService: _MetaCommandService

  beforeEach(() => {
    sut = makeSut()
    metaCommandService = TestBed.inject(_MetaCommandService)
  })

  describe('card', () => {
    const card = TwitterCardType.Summary

    it('should apply meta command with card property and content', () => {
      sut.card(card)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(TwitterCardMetaProperty.CARD, card),
      )
    })
  })

  describe('site', () => {
    const site = '@fooInc'

    it('should apply meta command with site property and content', () => {
      sut.site(site)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(TwitterCardMetaProperty.SITE, site),
      )
    })
  })

  describe('site ID', () => {
    const siteId = '123456789'

    it('should apply meta command with site ID property and content', () => {
      sut.siteId(siteId)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(TwitterCardMetaProperty.SITE_ID, siteId),
      )
    })
  })

  describe('creator', () => {
    const creator = '@mrFoo'

    it('should apply meta command with creator property and content', () => {
      sut.creator(creator)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(TwitterCardMetaProperty.CREATOR, creator),
      )
    })
  })

  describe('creator ID', () => {
    const creatorId = '1234567890'

    it('should apply meta command with creator ID property and content', () => {
      sut.creatorId(creatorId)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(TwitterCardMetaProperty.CREATOR_ID, creatorId),
      )
    })
  })

  describe('description', () => {
    const description = 'Lorem ipsum lorem'

    it('should apply meta command with description property and content', () => {
      sut.description(description)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(TwitterCardMetaProperty.DESCRIPTION, description),
      )
    })
  })

  describe('title', () => {
    const title = 'Foo'

    it('should apply meta command with title property and content', () => {
      sut.title(title)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(TwitterCardMetaProperty.TITLE, title),
      )
    })
  })

  describe('image', () => {
    describe('when non null', () => {
      const image: TwitterCardImage = {
        url: new URL('https://example.com/foo.png'),
        alt: 'Alternative text',
      }

      it('should apply all meta commands with properties and contents', () => {
        sut.image(image)

        expect(metaCommandService.apply).toHaveBeenCalledTimes(
          Object.keys(image).length,
        )
        expect(metaCommandService.apply).toHaveBeenCalledWith(
          new _MetaCommand(TwitterCardMetaProperty.IMAGE, image.url.toString()),
        )
        expect(metaCommandService.apply).toHaveBeenCalledWith(
          new _MetaCommand(TwitterCardMetaProperty.IMAGE_ALT, image.alt),
        )
      })
    })

    describe('when null', () => {
      const image = null

      it('should apply meta commands to remove all image properties', () => {
        const imageProperties = TwitterCardMetaProperty.images()
        expect(imageProperties.length).toBeGreaterThan(0)

        sut.image(image)

        expect(metaCommandService.apply).toHaveBeenCalledTimes(
          imageProperties.length,
        )
        for (const imageProperty of imageProperties) {
          expect(metaCommandService.apply).toHaveBeenCalledWith(
            new _MetaCommand(imageProperty, null),
          )
        }
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [TwitterCardAppliersService, MockProvider(_MetaCommandService)],
  })
  return TestBed.inject(TwitterCardAppliersService)
}
