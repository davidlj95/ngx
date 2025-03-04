import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { Title } from '@angular/platform-browser'
import {
  _titleFormatter,
  NgxMetaMetadataManager,
  TitleFormatter,
} from '@davidlj95/ngx-meta/core'
import { Standard } from '../types'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'
import { provideStandardTitle } from './provide-standard-title'

describe('Standard title metadata manager', () => {
  enableAutoSpy()
  let sut: NgxMetaMetadataManager<Standard['title']>
  let titleService: jasmine.SpyObj<Title>

  it('should not update title when title is not provided ', () => {
    sut = makeSut()
    titleService = TestBed.inject(Title) as jasmine.SpyObj<Title>

    sut.set(undefined)

    expect(titleService.setTitle).not.toHaveBeenCalled()
  })

  it('should update title when title is empty ', () => {
    sut = makeSut()
    titleService = TestBed.inject(Title) as jasmine.SpyObj<Title>
    const pageTitle = ''

    sut.set(pageTitle)

    expect(titleService.setTitle).toHaveBeenCalledOnceWith(pageTitle)
  })

  it('should update title when title is provided', () => {
    sut = makeSut()
    titleService = TestBed.inject(Title) as jasmine.SpyObj<Title>
    const pageTitle = 'Page title'

    sut.set(pageTitle)

    expect(titleService.setTitle).toHaveBeenCalledOnceWith(pageTitle)
  })

  it('should update title with formatted title when a title is provided', () => {
    const formattedPageTitle = 'Formatted page title'
    const titleFormatter = jasmine
      .createSpy<TitleFormatter>()
      .and.returnValue(formattedPageTitle)
    sut = makeSut({ titleFormatter })

    titleService = TestBed.inject(Title) as jasmine.SpyObj<Title>
    const pageTitle = 'Page title'

    sut.set(pageTitle)

    expect(titleService.setTitle).toHaveBeenCalledOnceWith(formattedPageTitle)
    expect(titleFormatter).toHaveBeenCalledOnceWith(pageTitle)
  })
})

function makeSut(
  opts: {
    titleFormatter?: TitleFormatter
  } = {},
): NgxMetaMetadataManager<Standard['title']> {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(Title),
      provideStandardTitle(),
      opts.titleFormatter
        ? { provide: _titleFormatter(), useValue: opts.titleFormatter }
        : [],
    ],
  })
  return injectOneMetadataManager()
}
