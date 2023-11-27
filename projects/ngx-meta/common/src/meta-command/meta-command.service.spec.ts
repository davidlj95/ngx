import { TestBed } from '@angular/core/testing'

import { MetaCommandService } from './meta-command.service'
import { MetaCommandProperty } from './meta-command-property'
import { MetaCommand } from './meta-command'
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

  describe('apply', () => {
    const property = new MetaCommandProperty({
      keyAttribute: 'name',
      keyName: 'dummy',
    })

    describe('when content is not provided (undefined)', () => {
      const metaCommand = new MetaCommand(property, undefined)

      it('should remove meta tag', () => {
        sut.apply(metaCommand)

        expect(metaService.removeTag).toHaveBeenCalledOnceWith(
          metaCommand.property.selector,
        )
      })
    })

    describe('when content is provided', () => {
      const metaCommand = new MetaCommand(property, 'Lorem ipsum lorem')

      it('should update the meta tag', () => {
        sut.apply(metaCommand)

        expect(metaService.updateTag).toHaveBeenCalledOnceWith(
          metaCommand.definition,
        )
      })
    })

    describe('when content is null', () => {
      const metaCommand = new MetaCommand(property, null)

      it('should remove the meta tag', () => {
        sut.apply(metaCommand)

        expect(metaService.removeTag).toHaveBeenCalledOnceWith(
          metaCommand.property.selector,
        )
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
