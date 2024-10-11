import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import {
  NgxMetaElementsService,
  NgxMetaMetadataManager,
} from '@davidlj95/ngx-meta/core'
import { VERSION } from '@angular/core'
import { Standard } from '../types'
import { STANDARD_GENERATOR_METADATA_PROVIDER } from './standard-generator-metadata-provider'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'
import { likeWhenNullOrUndefined } from '@/ngx-meta/test/like-when-null-or-undefined'

describe('Standard generator metadata manager', () => {
  enableAutoSpy()
  let sut: NgxMetaMetadataManager<Standard['generator']>
  let metaElementsService: jasmine.SpyObj<NgxMetaElementsService>

  beforeEach(() => {
    sut = makeSut()
    metaElementsService = TestBed.inject(
      NgxMetaElementsService,
    ) as jasmine.SpyObj<NgxMetaElementsService>
  })

  describe('when not provided', () => {
    likeWhenNullOrUndefined((testCase) => {
      it(`should call meta service with ${testCase}`, () => {
        sut.set(undefined)

        expect(metaElementsService.set).toHaveBeenCalledOnceWith(
          jasmine.anything(),
          undefined,
        )
      })
    })
  })

  describe('when true', () => {
    const value: Standard['generator'] = true

    it('should call meta service with Angular version as value', () => {
      sut.set(value)

      expect(metaElementsService.set).toHaveBeenCalledOnceWith(
        ['name', 'generator'],
        { content: `Angular v${VERSION.full}` },
      )
    })
  })
})

function makeSut(): NgxMetaMetadataManager<Standard['generator']> {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(NgxMetaElementsService),
      STANDARD_GENERATOR_METADATA_PROVIDER,
    ],
  })
  return injectOneMetadataManager()
}
