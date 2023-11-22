import { TestBed } from '@angular/core/testing'

import { TwitterCardGeneralMetadataListenerService } from './twitter-card-general-metadata-listener.service'
import { EventEmitter, Provider } from '@angular/core'
import { GeneralMetadata } from '../general-metadata'
import { MockProvider } from 'ng-mocks'
import { GeneralMetadataAppliersService } from '../general-metadata/general-metadata-appliers.service'
import { GeneralMetadataImage } from '../general-metadata'
import { TwitterCardAppliersService } from './twitter-card-appliers.service'
import { enableAutoSpy } from '../__tests__/enable-auto-spy'

describe('TwitterCardGeneralMetadataListenerService', () => {
  enableAutoSpy()

  describe('listen', () => {
    describe('when general metadata is not available', () => {
      it('should not subscribe', () => {
        const sut = makeSut({ generalMetadataUnavailable: true })

        sut.listen()

        expect(sut['subscription']).toBeUndefined()
      })
    })

    describe('when not listening yet', () => {
      // Though as probably injected in root module, may never be destroyed 🤷‍
      it('should subscribe to general metadata events and unsubscribe when destroyed', () => {
        const changes$ = new EventEmitter()
        const sut = makeSut({ changes$ })

        sut.listen()

        expect(changes$.observed).toBeTrue()

        TestBed.resetTestingModule()

        expect(changes$.observed).toBeFalse()
      })
    })

    describe('when already listening', () => {
      it('should throw error and not subscribe again', () => {
        const sut = makeSut()
        sut.listen()

        expect(() => sut.listen()).toThrowError()
      })
    })
    describe('when a change is emitted', () => {
      let changes$: EventEmitter<GeneralMetadata>
      let sut: TwitterCardGeneralMetadataListenerService
      let appliers: TwitterCardAppliersService

      beforeEach(() => {
        changes$ = new EventEmitter()
        sut = makeSut({ changes$ })
        appliers = TestBed.inject(TwitterCardAppliersService)

        sut.listen()
      })

      describe('like a title change', () => {
        const title = 'Foo'

        beforeEach(() => {
          changes$.emit({ title })
        })

        it('should run title applier with emitted value', () => {
          expect(appliers.title).toHaveBeenCalledOnceWith(title)
        })
      })

      describe('like a description change', () => {
        const description = 'Lorem ipsum lorem'

        beforeEach(() => {
          changes$.emit({ description })
        })

        it('should run description applier with emitted value', () => {
          expect(appliers.description).toHaveBeenCalledOnceWith(description)
        })
      })

      describe('like an image change', () => {
        const image: GeneralMetadataImage = {
          url: new URL('https://example.com/foo.png'),
          alt: 'Foo alternative text',
        }

        beforeEach(() => {
          changes$.emit({ image })
        })

        it('should run image applier with emitted value', () => {
          expect(appliers.image).toHaveBeenCalledOnceWith(image)
        })
      })
    })
  })
})

function makeSut(
  opts: {
    changes$?: EventEmitter<GeneralMetadata>
    generalMetadataUnavailable?: boolean
  } = {},
) {
  const providers: Provider[] = [
    TwitterCardGeneralMetadataListenerService,
    MockProvider(TwitterCardAppliersService),
  ]

  if (!opts.generalMetadataUnavailable) {
    providers.push(
      MockProvider(GeneralMetadataAppliersService, {
        changes$: opts.changes$ ?? new EventEmitter(),
      }),
    )
  }

  TestBed.configureTestingModule({ providers })

  return TestBed.inject(TwitterCardGeneralMetadataListenerService)
}
