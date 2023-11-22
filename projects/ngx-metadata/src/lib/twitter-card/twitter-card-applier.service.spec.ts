import { TestBed } from '@angular/core/testing'

import { TwitterCardApplierService } from './twitter-card-applier.service'
import { MockProvider } from 'ng-mocks'
import { TwitterCardAppliersService } from './twitter-card-appliers.service'
import { TwitterCard } from './twitter-card'
import { TwitterCardType } from './twitter-card-type'
import { enableAutoSpy } from '../__tests__/enable-auto-spy'

describe('TwitterCardApplierService', () => {
  enableAutoSpy()

  describe('apply', () => {
    let sut: TwitterCardApplierService
    let appliersService: TwitterCardAppliersService

    const metadata: TwitterCard = {
      card: TwitterCardType.Summary,
      site: '@fooSite',
      siteId: '1234567890',
      creator: '@mrFoo',
      creatorId: '9876543210',
      description: 'Lorem ipsum lorem',
      title: 'Mr Foo',
      image: {
        url: new URL('https://example.com/foo.png'),
        alt: 'Foo alternative text',
      },
    }

    beforeEach(() => {
      sut = makeSut()
      appliersService = TestBed.inject(TwitterCardAppliersService)
    })

    it('should run card applier', () => {
      sut.apply(metadata)

      expect(appliersService.card).toHaveBeenCalledOnceWith(metadata.card)
    })

    it('should run site applier', () => {
      sut.apply(metadata)

      expect(appliersService.site).toHaveBeenCalledOnceWith(metadata.site)
    })

    it('should run site ID applier', () => {
      sut.apply(metadata)

      expect(appliersService.siteId).toHaveBeenCalledOnceWith(metadata.siteId)
    })

    it('should run creator applier', () => {
      sut.apply(metadata)

      expect(appliersService.creator).toHaveBeenCalledOnceWith(metadata.creator)
    })

    it('should run creator ID applier', () => {
      sut.apply(metadata)

      expect(appliersService.creatorId).toHaveBeenCalledOnceWith(
        metadata.creatorId,
      )
    })

    it('should run description applier', () => {
      sut.apply(metadata)

      expect(appliersService.description).toHaveBeenCalledOnceWith(
        metadata.description,
      )
    })

    it('should run title applier', () => {
      sut.apply(metadata)

      expect(appliersService.title).toHaveBeenCalledOnceWith(metadata.title)
    })

    it('should run image applier', () => {
      sut.apply(metadata)

      expect(appliersService.image).toHaveBeenCalledOnceWith(metadata.image)
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      TwitterCardApplierService,
      MockProvider(TwitterCardAppliersService),
    ],
  })
  return TestBed.inject(TwitterCardApplierService)
}
