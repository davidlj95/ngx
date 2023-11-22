import { TestBed } from '@angular/core/testing'

import { TwitterCardService } from './twitter-card.service'
import { MockProvider } from 'ng-mocks'
import { DefaultsService } from '../common/defaults.service'
import { TwitterCardApplierService } from './twitter-card-applier.service'
import { TWITTER_CARD_DEFAULTS_TOKEN } from './twitter-card-defaults-token'
import { TwitterCard } from './twitter-card'
import { Provider } from '@angular/core'
import { enableAutoSpy } from '../__tests__/enable-auto-spy'

describe('TwitterCardService', () => {
  enableAutoSpy()

  describe('apply', () => {
    const metadata: TwitterCard = { description: 'Dummy description' }

    describe('when defaults are available', () => {
      const defaults: TwitterCard = { title: 'Dummy title' }
      let sut: TwitterCardService

      beforeEach(() => {
        sut = makeSut({ defaults })
      })

      it('should merge provided metadata with defaults', () => {
        sut.apply(metadata)

        const defaultsService = TestBed.inject(DefaultsService)
        expect(defaultsService.resolve).toHaveBeenCalledOnceWith(
          metadata,
          defaults,
        )
      })

      it('should apply metadata with defaults included', () => {
        const defaultsService = TestBed.inject(
          DefaultsService,
        ) as jasmine.SpyObj<DefaultsService>
        const resolvedDefaults = { ...metadata, ...defaults }
        defaultsService.resolve.and.returnValue(resolvedDefaults)

        sut.apply(metadata)

        const applierService = TestBed.inject(TwitterCardApplierService)
        expect(applierService.apply).toHaveBeenCalledOnceWith(resolvedDefaults)
      })
    })

    describe('when no defaults are available', () => {
      let sut: TwitterCardService

      beforeEach(() => {
        sut = makeSut()
      })

      it('should apply metadata with given argument', () => {
        sut.apply(metadata)

        const applierService = TestBed.inject(TwitterCardApplierService)
        expect(applierService.apply).toHaveBeenCalledOnceWith(metadata)
      })
    })
  })
})

function makeSut(opts: { defaults?: TwitterCard } = {}) {
  const providers: Provider[] = [
    TwitterCardService,
    MockProvider(DefaultsService),
    MockProvider(TwitterCardApplierService),
  ]

  if (opts.defaults) {
    providers.push(
      MockProvider(TWITTER_CARD_DEFAULTS_TOKEN, opts.defaults, 'useValue'),
    )
  }

  TestBed.configureTestingModule({ providers })

  return TestBed.inject(TwitterCardService)
}
