import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetaService } from '../../core'
import { GeneratorMetadata } from './generator-metadata'
import { VERSION } from '@angular/core'

describe('Generator metadata', () => {
  enableAutoSpy()
  let sut: GeneratorMetadata
  let metaService: jasmine.SpyObj<MetaService>

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(MetaService) as jasmine.SpyObj<MetaService>
  })

  describe('set', () => {
    it('when not provided should call meta service with nothing value', () => {
      sut.set(undefined)

      expect(metaService.set).toHaveBeenCalledOnceWith(
        jasmine.anything(),
        undefined,
      )
    })
    it('when null should call meta service with null value', () => {
      sut.set(null)

      expect(metaService.set).toHaveBeenCalledOnceWith(jasmine.anything(), null)
    })
    it('when true should call meta service with Angular version as value', () => {
      sut.set(true)

      expect(metaService.set).toHaveBeenCalledOnceWith(
        jasmine.anything(),
        `Angular v${VERSION.full}`,
      )
    })
  })
})

function makeSut(): GeneratorMetadata {
  TestBed.configureTestingModule({
    providers: [GeneratorMetadata, MockProvider(MetaService)],
  })
  return TestBed.inject(GeneratorMetadata)
}
