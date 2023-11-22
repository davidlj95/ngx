import { TestBed } from '@angular/core/testing'

import { GeneralMetadataService } from './general-metadata.service'
import { MockProvider } from 'ng-mocks'
import { GeneralMetadata } from './general-metadata'
import { GENERAL_METADATA_DEFAULTS_TOKEN } from './general-metadata-defaults-token'
import { GeneralMetadataApplierService } from './general-metadata-applier.service'
import { Provider } from '@angular/core'
import { enableAutoSpy } from 'ngx-metadata/__tests__/enable-auto-spy'
import { _DefaultsService } from 'ngx-metadata/common'

describe('GeneralMetadataService', () => {
  enableAutoSpy()

  describe('apply', () => {
    const metadata: GeneralMetadata = { description: 'Dummy description' }

    describe('when defaults are available', () => {
      const defaults: GeneralMetadata = { title: 'Dummy title' }
      let sut: GeneralMetadataService

      beforeEach(() => {
        sut = makeSut({ defaults })
      })

      it('should merge provided metadata with defaults', () => {
        sut.apply(metadata)

        const defaultsService = TestBed.inject(_DefaultsService)
        expect(defaultsService.resolve).toHaveBeenCalledOnceWith(
          metadata,
          defaults,
        )
      })

      it('should apply metadata with defaults included', () => {
        const defaultsService = TestBed.inject(
          _DefaultsService,
        ) as jasmine.SpyObj<_DefaultsService>
        const resolvedDefaults = { ...metadata, ...defaults }
        defaultsService.resolve.and.returnValue(resolvedDefaults)

        sut.apply(metadata)

        const applierService = TestBed.inject(GeneralMetadataApplierService)
        expect(applierService.apply).toHaveBeenCalledOnceWith(resolvedDefaults)
      })
    })

    describe('when no defaults are available', () => {
      let sut: GeneralMetadataService

      beforeEach(() => {
        sut = makeSut()
      })

      it('should apply metadata with given argument', () => {
        sut.apply(metadata)

        const applierService = TestBed.inject(GeneralMetadataApplierService)
        expect(applierService.apply).toHaveBeenCalledOnceWith(metadata)
      })
    })
  })
})

function makeSut(opts: { defaults?: GeneralMetadata } = {}) {
  const providers: Provider[] = [
    GeneralMetadataService,
    MockProvider(_DefaultsService),
    MockProvider(GeneralMetadataApplierService),
  ]

  if (opts.defaults) {
    providers.push(
      MockProvider(GENERAL_METADATA_DEFAULTS_TOKEN, opts.defaults, 'useValue'),
    )
  }

  TestBed.configureTestingModule({ providers })

  return TestBed.inject(GeneralMetadataService)
}
