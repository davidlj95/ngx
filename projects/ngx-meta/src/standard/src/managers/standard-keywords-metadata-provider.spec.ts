import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import {
  NgxMetaElementsService,
  NgxMetaMetadataManager,
} from '@davidlj95/ngx-meta/core'
import { Standard } from '../types'
import { STANDARD_KEYWORDS_METADATA_PROVIDER } from './standard-keywords-metadata-provider'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'

describe('Standard keywords metadata manager', () => {
  enableAutoSpy()
  let sut: NgxMetaMetadataManager<Standard['keywords']>
  let metaElementsService: jasmine.SpyObj<NgxMetaElementsService>

  beforeEach(() => {
    sut = makeSut()
    metaElementsService = TestBed.inject(
      NgxMetaElementsService,
    ) as jasmine.SpyObj<NgxMetaElementsService>
  })

  it('should set keywords separated by comma', () => {
    const firstKeyword = 'first'
    const secondKeyword = 'second'
    const thirdKeyword = 'third'

    sut.set([firstKeyword, secondKeyword, thirdKeyword])

    expect(metaElementsService.set).toHaveBeenCalledOnceWith(
      ['name', 'keywords'],
      { content: `${firstKeyword},${secondKeyword},${thirdKeyword}` },
    )
  })
})

function makeSut(): NgxMetaMetadataManager<Standard['keywords']> {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(NgxMetaElementsService),
      STANDARD_KEYWORDS_METADATA_PROVIDER,
    ],
  })
  return injectOneMetadataManager()
}
