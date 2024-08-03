import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { MetadataSetter, NgxMetaMetaService } from '@davidlj95/ngx-meta/core'
import { Standard } from './standard'
import { __STANDARD_KEYWORDS_METADATA_SETTER_FACTORY } from './standard-keywords-metadata-provider'

describe('Standard keywords metadata', () => {
  enableAutoSpy()
  let sut: MetadataSetter<Standard['keywords']>
  let metaService: jasmine.SpyObj<NgxMetaMetaService>

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(
      NgxMetaMetaService,
    ) as jasmine.SpyObj<NgxMetaMetaService>
  })

  it('should set keywords separated by comma', () => {
    const firstKeyword = 'first'
    const secondKeyword = 'second'
    const thirdKeyword = 'third'

    sut([firstKeyword, secondKeyword, thirdKeyword])

    expect(metaService.set).toHaveBeenCalledOnceWith(
      jasmine.anything(),
      `${firstKeyword},${secondKeyword},${thirdKeyword}`,
    )
  })
})

function makeSut(): MetadataSetter<Standard['keywords']> {
  TestBed.configureTestingModule({
    providers: [MockProvider(NgxMetaMetaService)],
  })
  return __STANDARD_KEYWORDS_METADATA_SETTER_FACTORY(
    TestBed.inject(NgxMetaMetaService),
  )
}
