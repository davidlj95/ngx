import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { Title } from '@angular/platform-browser'
import { MetadataSetter } from '@davidlj95/ngx-meta/core'
import { Standard } from './standard'
import { __STANDARD_TITLE_METADATA_SETTER_FACTORY } from './standard-title-metadata-provider'

describe('Standard title metadata', () => {
  enableAutoSpy()
  let sut: MetadataSetter<Standard['title']>
  let titleService: jasmine.SpyObj<Title>

  beforeEach(() => {
    sut = makeSut()
    titleService = TestBed.inject(Title) as jasmine.SpyObj<Title>
  })

  describe('setter', () => {
    it('when title is not provided should not update title', () => {
      sut(undefined)

      expect(titleService.setTitle).not.toHaveBeenCalled()
    })

    it('when title is empty should update title', () => {
      const pageTitle = ''

      sut(pageTitle)

      expect(titleService.setTitle).toHaveBeenCalledOnceWith(pageTitle)
    })

    it('when title is provided should update title', () => {
      const pageTitle = 'Page title'

      sut(pageTitle)

      expect(titleService.setTitle).toHaveBeenCalledOnceWith(pageTitle)
    })
  })
})

function makeSut(): MetadataSetter<Standard['title']> {
  TestBed.configureTestingModule({
    providers: [MockProvider(Title)],
  })
  return __STANDARD_TITLE_METADATA_SETTER_FACTORY(TestBed.inject(Title))
}
