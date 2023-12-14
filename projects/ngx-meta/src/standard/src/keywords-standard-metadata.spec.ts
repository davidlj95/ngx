import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { KeywordsStandardMetadata } from './keywords-standard-metadata.service'
import { MetaService } from '../../core'

describe('Keywords standard metadata', () => {
  enableAutoSpy()
  let sut: KeywordsStandardMetadata
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

      sut.set([firstKeyword, secondKeyword, thirdKeyword])

      expect(metaService.set).toHaveBeenCalledOnceWith(
        jasmine.anything(),
        `${firstKeyword},${secondKeyword},${thirdKeyword}`,
      )
    })
  })
})

function makeSut(): KeywordsStandardMetadata {
  TestBed.configureTestingModule({
    providers: [KeywordsStandardMetadata, MockProvider(MetaService)],
  })
  return TestBed.inject(KeywordsStandardMetadata)
}
