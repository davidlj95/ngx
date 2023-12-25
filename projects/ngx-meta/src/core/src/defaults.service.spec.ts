import { TestBed } from '@angular/core/testing'

import { DefaultsService } from './defaults.service'
import { MockProvider, MockProviders } from 'ng-mocks'
import { DEFAULTS_TOKEN } from './defaults-token'
import { Provider } from '@angular/core'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataValues } from './metadata-values'

describe('DefaultsService', () => {
  enableAutoSpy()

  describe('get', () => {
    describe('when no defaults available', () => {
      describe('like when defaults not injected', () => {
        it('should return empty object', () => {
          const sut = makeSut()

          expect(sut.get()).toEqual({})
        })
      })

      describe('like when non defined defaults', () => {
        const defaults = undefined

        it('should return empty object', () => {
          const sut = makeSut({ defaults })

          expect(sut.get()).toEqual({})
        })
      })
    })

    describe('when defaults available', () => {
      const defaults = { foo: 'bar' }

      it('should return default values', () => {
        const sut = makeSut({ defaults })

        expect(sut.get()).toEqual(defaults)
      })
    })
  })
})

function makeSut(opts: { defaults?: MetadataValues } = {}) {
  const providers: Provider[] = [
    DefaultsService,
    MockProviders(MetadataValueFromValues),
  ]
  if (opts.defaults) {
    providers.push(MockProvider(DEFAULTS_TOKEN, opts.defaults, 'useValue'))
  }
  TestBed.configureTestingModule({ providers })
  return TestBed.inject(DefaultsService)
}
