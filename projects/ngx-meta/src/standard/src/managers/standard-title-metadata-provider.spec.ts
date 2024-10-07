import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { Title } from '@angular/platform-browser'
import { NgxMetaMetadataManager } from '@davidlj95/ngx-meta/core'
import { Standard } from '../types'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'
import { STANDARD_TITLE_METADATA_PROVIDER } from './standard-title-metadata-provider'

describe('Standard title metadata manager', () => {
  enableAutoSpy()
  let sut: NgxMetaMetadataManager<Standard['title']>
  let titleService: jasmine.SpyObj<Title>

  beforeEach(() => {
    sut = makeSut()
    titleService = TestBed.inject(Title) as jasmine.SpyObj<Title>
  })

  it('should not update title when title is not provided ', () => {
    sut.set(undefined)

    expect(titleService.setTitle).not.toHaveBeenCalled()
  })

  it('should update title when title is empty ', () => {
    const pageTitle = ''

    sut.set(pageTitle)

    expect(titleService.setTitle).toHaveBeenCalledOnceWith(pageTitle)
  })

  it('should update title when title is provided', () => {
    const pageTitle = 'Page title'

    sut.set(pageTitle)

    expect(titleService.setTitle).toHaveBeenCalledOnceWith(pageTitle)
  })
})

function makeSut(): NgxMetaMetadataManager<Standard['title']> {
  TestBed.configureTestingModule({
    providers: [MockProvider(Title), STANDARD_TITLE_METADATA_PROVIDER],
  })
  return injectOneMetadataManager()
}
