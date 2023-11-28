import { TestBed } from '@angular/core/testing'

import { TwitterCardAppliersService } from './twitter-card-appliers.service'
import { MockProvider } from 'ng-mocks'
import { TwitterCardType } from './twitter-card-type'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'
import { TwitterCardImage } from './twitter-card-image'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'
import { _MetaService } from '@davidlj95/ngx-meta/common'

describe('TwitterCardAppliersService', () => {
  enableAutoSpy()

  let sut: TwitterCardAppliersService
  // noinspection DuplicatedCode
  let metaService: _MetaService

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(_MetaService)
  })

  describe('card', () => {
    const card = TwitterCardType.Summary

    it('should apply meta command with card property and content', () => {
      sut.card(card)

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        TwitterCardMetaProperty.CARD,
        card,
      )
    })
  })

  describe('site', () => {
    const site = '@fooInc'

    it('should apply meta command with site property and content', () => {
      sut.site(site)

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        TwitterCardMetaProperty.SITE,
        site,
      )
    })
  })

  describe('site ID', () => {
    const siteId = '123456789'

    it('should apply meta command with site ID property and content', () => {
      sut.siteId(siteId)

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        TwitterCardMetaProperty.SITE_ID,
        siteId,
      )
    })
  })

  describe('creator', () => {
    const creator = '@mrFoo'

    it('should apply meta command with creator property and content', () => {
      sut.creator(creator)

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        TwitterCardMetaProperty.CREATOR,
        creator,
      )
    })
  })

  describe('creator ID', () => {
    const creatorId = '1234567890'

    it('should apply meta command with creator ID property and content', () => {
      sut.creatorId(creatorId)

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        TwitterCardMetaProperty.CREATOR_ID,
        creatorId,
      )
    })
  })

  describe('description', () => {
    const description = 'Lorem ipsum lorem'

    it('should apply meta command with description property and content', () => {
      sut.description(description)

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        TwitterCardMetaProperty.DESCRIPTION,
        description,
      )
    })
  })

  describe('title', () => {
    const title = 'Foo'

    it('should apply meta command with title property and content', () => {
      sut.title(title)

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        TwitterCardMetaProperty.TITLE,
        title,
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

        expect(metaService.apply).toHaveBeenCalledTimes(
          Object.keys(image).length,
        )
        expect(metaService.apply).toHaveBeenCalledWith(
          TwitterCardMetaProperty.IMAGE,
          image.url.toString(),
        )
        expect(metaService.apply).toHaveBeenCalledWith(
          TwitterCardMetaProperty.IMAGE_ALT,
          image.alt,
        )
      })
    })

    describe('when null', () => {
      const image = null

      it('should apply meta commands to remove all image properties', () => {
        const imageProperties = TwitterCardMetaProperty.images()
        expect(imageProperties.length).toBeGreaterThan(0)

        sut.image(image)

        expect(metaService.apply).toHaveBeenCalledTimes(imageProperties.length)
        for (const imageProperty of imageProperties) {
          expect(metaService.apply).toHaveBeenCalledWith(imageProperty, null)
        }
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [TwitterCardAppliersService, MockProvider(_MetaService)],
  })
  return TestBed.inject(TwitterCardAppliersService)
}
