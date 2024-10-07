import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import {
  NgxMetaMetadataManager,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { VERSION } from '@angular/core'
import { Standard } from '../types'
import { STANDARD_GENERATOR_METADATA_PROVIDER } from './standard-generator-metadata-provider'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'

describe('Standard generator metadata manager', () => {
  enableAutoSpy()
  let sut: NgxMetaMetadataManager<Standard['generator']>
  let metaService: jasmine.SpyObj<NgxMetaMetaService>

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(
      NgxMetaMetaService,
    ) as jasmine.SpyObj<NgxMetaMetaService>
  })

  describe('when not provided', () => {
    const TEST_CASES = [null, undefined]
    TEST_CASES.forEach((testCase) => {
      describe(`like when ${testCase}`, () => {
        it(`should call meta service with ${testCase}`, () => {
          sut.set(undefined)

          expect(metaService.set).toHaveBeenCalledOnceWith(
            jasmine.anything(),
            undefined,
          )
        })
      })
    })
  })

  describe('when true', () => {
    const value: Standard['generator'] = true

    it('should call meta service with Angular version as value', () => {
      sut.set(value)

      expect(metaService.set).toHaveBeenCalledOnceWith(
        jasmine.anything(),
        `Angular v${VERSION.full}`,
      )
    })
  })
})

function makeSut(): NgxMetaMetadataManager<Standard['generator']> {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(NgxMetaMetaService),
      STANDARD_GENERATOR_METADATA_PROVIDER,
    ],
  })
  return injectOneMetadataManager()
}
