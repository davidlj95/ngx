import { TestBed } from '@angular/core/testing'

import { DefaultsService } from './defaults.service'
import { MockProvider, MockProviders } from 'ng-mocks'
import { DEFAULTS_TOKEN } from './defaults-token'
import { Provider } from '@angular/core'
import { MetadataValueGetter } from './metadata-value-getter'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { makeMetadataDefinition } from './__tests__/make-metadata-definition'

describe('DefaultsService', () => {
  enableAutoSpy()
  const value = 'value'

  describe('get', () => {
    describe('when no defaults available', () => {
      const definition = makeMetadataDefinition()

      describe('like when defaults not injected', () => {
        it('should return undefined', () => {
          const sut = makeSut()

          expect(sut.get(definition)).toBeUndefined()
        })
      })

      describe('like when empty defaults', () => {
        const defaults = {}

        it('should return undefined', () => {
          const sut = makeSut({ defaults })

          expect(sut.get(definition)).toBeUndefined()
        })
      })
    })
    describe('when defaults available', () => {
      const defaults = {}

      describe('when global is defined', () => {
        const globalName = 'globalName'
        const definition = makeMetadataDefinition({
          globalName,
        })
        const defaults = { [globalName]: value }

        it('should return global default value', () => {
          const sut = makeSut({ defaults })

          expect(sut.get(definition)).toEqual(value)
        })
      })

      describe('when default is defined', () => {
        const definition = makeMetadataDefinition()
        let sut: DefaultsService
        let valueGetter: jasmine.SpyObj<MetadataValueGetter>

        beforeEach(() => {
          sut = makeSut({ defaults })
          valueGetter = TestBed.inject(
            MetadataValueGetter,
          ) as jasmine.SpyObj<MetadataValueGetter>
          valueGetter.get.and.returnValue(value)
        })

        it('should return default value using value getter', () => {
          expect(sut.get(definition)).toEqual(value)
          expect(valueGetter.get).toHaveBeenCalledOnceWith(definition, defaults)
        })
      })

      describe('when both global and default are defined', () => {
        const globalName = 'globalName'
        const definition = makeMetadataDefinition({
          globalName,
        })
        const defaults = { [globalName]: 'default global value' }
        let sut: DefaultsService
        let valueGetter: jasmine.SpyObj<MetadataValueGetter>

        beforeEach(() => {
          sut = makeSut({ defaults })
          valueGetter = TestBed.inject(
            MetadataValueGetter,
          ) as jasmine.SpyObj<MetadataValueGetter>
          valueGetter.get.and.returnValue(value)
        })

        it('should return default', () => {
          expect(sut.get(definition)).toEqual(value)
        })
      })
    })
  })
})

function makeSut(opts: { defaults?: object } = {}) {
  const providers: Provider[] = [
    DefaultsService,
    MockProviders(MetadataValueGetter),
  ]
  if (opts.defaults) {
    providers.push(MockProvider(DEFAULTS_TOKEN, opts.defaults, 'useValue'))
  }
  TestBed.configureTestingModule({ providers })
  return TestBed.inject(DefaultsService)
}
