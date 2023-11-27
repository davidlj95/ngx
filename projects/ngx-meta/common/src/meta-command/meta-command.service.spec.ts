import { TestBed } from '@angular/core/testing'

import { MetaCommandService } from './meta-command.service'
import { MetaProperty } from './meta-property'
import { MockProvider } from 'ng-mocks'
import { Meta } from '@angular/platform-browser'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'

describe('MetaCommandService', () => {
  enableAutoSpy()

  let sut: MetaCommandService
  let metaService: Meta

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(Meta)
  })

  describe('newApply', () => {
    const property = new MetaProperty({
      keyAttribute: 'propertyName',
      keyName: 'dummy',
      contentAttribute: 'propertyContent',
    })

    describe('when content is not provided (undefined)', () => {
      const content = undefined

      it('should remove meta element', () => {
        sut.newApply(property, content)

        expect(metaService.removeTag).toHaveBeenCalledOnceWith(
          property.selector,
        )
      })
    })

    describe('when content is null', () => {
      const content = null

      it('should remove meta element', () => {
        sut.newApply(property, content)

        expect(metaService.removeTag).toHaveBeenCalledOnceWith(
          property.selector,
        )
      })
    })

    describe('when content is provided', () => {
      const content = 'Lorem ipsum lorem'

      it('should update the meta tag', () => {
        sut.newApply(property, content)

        expect(metaService.updateTag).toHaveBeenCalledOnceWith({
          [property.keyAttribute]: property.keyName,
          [property.contentAttribute]: content,
        })
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [MetaCommandService, MockProvider(Meta)],
  })
  return TestBed.inject(MetaCommandService)
}
