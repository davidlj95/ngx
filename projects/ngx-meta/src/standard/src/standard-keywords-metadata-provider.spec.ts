import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataSetter, MetaService } from '../../core'
import { Standard } from './standard'
import { STANDARD_KEYWORDS_METADATA_SETTER_FACTORY } from './standard-keywords-metadata-provider'

describe('Standard keywords metadata provider', () => {
  enableAutoSpy()
  let sut: MetadataSetter<Standard['keywords']>
  let metaService: jasmine.SpyObj<MetaService>

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(MetaService) as jasmine.SpyObj<MetaService>
  })

  describe('set', () => {
    it('when keywords are provided should set them separated by comma', () => {
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
})

function makeSut(): MetadataSetter<Standard['keywords']> {
  TestBed.configureTestingModule({
    providers: [MockProvider(MetaService)],
  })
  return STANDARD_KEYWORDS_METADATA_SETTER_FACTORY(TestBed.inject(MetaService))
}
