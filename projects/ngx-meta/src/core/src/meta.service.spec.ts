import { TestBed } from '@angular/core/testing'

import { MetaService } from './meta.service'
import { MetaProperty } from './meta-property'
import { MockProvider } from 'ng-mocks'
import { Meta } from '@angular/platform-browser'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'

describe('Meta service', () => {
  enableAutoSpy()

  let sut: MetaService
  let metaService: Meta

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(Meta)
  })

  describe('set', () => {
    const property = new MetaProperty({
      keyAttr: 'propertyName',
      keyName: 'dummy',
      valAttr: 'propertyContent',
    })

    describe('when content is not provided (undefined)', () => {
      const content = undefined

      it('should remove meta element', () => {
        sut.set(property, content)

        expect(metaService.removeTag).toHaveBeenCalledOnceWith(
          property.selector,
        )
      })
    })

    describe('when content is null', () => {
      const content = null

      it('should remove meta element', () => {
        sut.set(property, content)

        expect(metaService.removeTag).toHaveBeenCalledOnceWith(
          property.selector,
        )
      })
    })

    describe('when content is provided', () => {
      const content = 'Lorem ipsum lorem'

      it('should update the meta tag', () => {
        sut.set(property, content)

        expect(metaService.updateTag).toHaveBeenCalledOnceWith({
          [property.keyAttr]: property.keyName,
          [property.valAttr]: content,
        })
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [MetaService, MockProvider(Meta)],
  })
  return TestBed.inject(MetaService)
}
