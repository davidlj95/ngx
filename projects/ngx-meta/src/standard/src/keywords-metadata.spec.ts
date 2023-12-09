import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { KeywordsMetadata } from './keywords-metadata'
import { MetaService } from '../../core'

describe('Keywords metadata', () => {
  enableAutoSpy()
  let sut: KeywordsMetadata
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

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        jasmine.anything(),
        `${firstKeyword},${secondKeyword},${thirdKeyword}`,
      )
    })
  })
})

function makeSut(): KeywordsMetadata {
  TestBed.configureTestingModule({
    providers: [KeywordsMetadata, MockProvider(MetaService)],
  })
  return TestBed.inject(KeywordsMetadata)
}
