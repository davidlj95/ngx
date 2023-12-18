import { TestBed } from '@angular/core/testing'

import { DefaultsService } from './defaults.service'
import { MockProvider, MockProviders } from 'ng-mocks'
import { DEFAULTS_TOKEN } from './defaults-token'
import { Provider } from '@angular/core'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataValues } from './metadata-values'
import { makeGlobalMetadataDefinition } from './__tests__/make-global-metadata-definition'

describe('DefaultsService', () => {
  enableAutoSpy()

  describe('get', () => {
    const dummyDefinition = makeGlobalMetadataDefinition()

    describe('when no defaults available', () => {
      describe('like when defaults not injected', () => {
        it('should return undefined', () => {
          const sut = makeSut()

          expect(sut.get(dummyDefinition)).toBeUndefined()
        })
      })

      describe('like when empty defaults', () => {
        const defaults = {}

        it('should return undefined', () => {
          const sut = makeSut({ defaults })

          expect(sut.get(dummyDefinition)).toBeUndefined()
        })
      })

      describe('like when non defined defaults', () => {
        const defaults = undefined

        it('should return undefined', () => {
          const sut = makeSut({ defaults })

          expect(sut.get(dummyDefinition)).toBeUndefined()
        })
      })
    })

    describe('when defaults available', () => {
      const defaults = { foo: 'bar' }
      let sut: DefaultsService

      beforeEach(() => {
        sut = makeSut({ defaults })
      })

      it('should return default value using collaborator', () => {
        const value = 'value'
        const valueFromValues = TestBed.inject(
          MetadataValueFromValues,
        ) as jasmine.SpyObj<MetadataValueFromValues>
        valueFromValues.get.and.returnValue(value)

        expect(sut.get(dummyDefinition)).toEqual(value)
        expect(valueFromValues.get).toHaveBeenCalledOnceWith(
          dummyDefinition,
          defaults,
        )
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
