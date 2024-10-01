import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { Title } from '@angular/platform-browser'
import { MetadataSetter } from '@davidlj95/ngx-meta/core'
import { Standard } from '../types/standard'
import { STANDARD_TITLE_METADATA_SETTER_FACTORY } from './standard-title-metadata-provider'

describe('Standard title metadata', () => {
  enableAutoSpy()
  let sut: MetadataSetter<Standard['title']>
  let titleService: jasmine.SpyObj<Title>

  beforeEach(() => {
    sut = makeSut()
    titleService = TestBed.inject(Title) as jasmine.SpyObj<Title>
  })

  it('should not update title when title is not provided ', () => {
    sut(undefined)

    expect(titleService.setTitle).not.toHaveBeenCalled()
  })

  it('should update title when title is empty ', () => {
    const pageTitle = ''

    sut(pageTitle)

    expect(titleService.setTitle).toHaveBeenCalledOnceWith(pageTitle)
  })

  it('should update title when title is provided', () => {
    const pageTitle = 'Page title'

    sut(pageTitle)

    expect(titleService.setTitle).toHaveBeenCalledOnceWith(pageTitle)
  })
})

function makeSut(): MetadataSetter<Standard['title']> {
  TestBed.configureTestingModule({
    providers: [MockProvider(Title)],
  })
  return STANDARD_TITLE_METADATA_SETTER_FACTORY(TestBed.inject(Title))
}
