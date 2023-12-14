import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { TitleStandardMetadata } from './title-standard-metadata.service'
import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { Title } from '@angular/platform-browser'

describe('Title standard metadata', () => {
  enableAutoSpy()
  let sut: TitleStandardMetadata
  let titleService: jasmine.SpyObj<Title>

  beforeEach(() => {
    sut = makeSut()
    titleService = TestBed.inject(Title) as jasmine.SpyObj<Title>
  })

  describe('set', () => {
    it('when title is not provided should not update title', () => {
      sut.set(undefined)

      expect(titleService.setTitle).not.toHaveBeenCalled()
    })

    it('when title is empty should update title', () => {
      const pageTitle = ''

      sut.set(pageTitle)

      expect(titleService.setTitle).toHaveBeenCalledOnceWith(pageTitle)
    })

    it('when title is provided should update title', () => {
      const pageTitle = 'Page title'

      sut.set(pageTitle)

      expect(titleService.setTitle).toHaveBeenCalledOnceWith(pageTitle)
    })
  })
})

function makeSut(): TitleStandardMetadata {
  TestBed.configureTestingModule({
    providers: [TitleStandardMetadata, MockProvider(Title)],
  })
  return TestBed.inject(TitleStandardMetadata)
}
