import {
  _titleFormatter,
  NgxMetaElementsService,
  NgxMetaMetadataManager,
  TitleFormatter,
} from '@davidlj95/ngx-meta/core'
import { TestBed } from '@angular/core/testing'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'
import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { TwitterCard } from '../types'
import { provideTwitterCardTitle } from './provide-twitter-card-title'

describe('Twitter Card title metadata manager', () => {
  enableAutoSpy()
  let sut: NgxMetaMetadataManager<TwitterCard['title']>
  let metaElementsService: jasmine.SpyObj<NgxMetaElementsService>

  it('should update title with formatted title when a title is provided', () => {
    const formattedPageTitle = 'Formatted page title'
    const titleFormatter = jasmine
      .createSpy<TitleFormatter>()
      .and.returnValue(formattedPageTitle)
    sut = makeSut({ titleFormatter })
    metaElementsService = TestBed.inject(
      NgxMetaElementsService,
    ) as jasmine.SpyObj<NgxMetaElementsService>

    const pageTitle = 'Page title'

    sut.set(pageTitle)

    expect(metaElementsService.set).toHaveBeenCalledOnceWith(
      ['name', 'twitter:title'],
      { content: formattedPageTitle },
    )

    expect(titleFormatter).toHaveBeenCalledOnceWith(pageTitle)
  })
})

function makeSut(
  opts: {
    titleFormatter?: TitleFormatter
  } = {},
): NgxMetaMetadataManager<TwitterCard['title']> {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(NgxMetaElementsService),
      opts.titleFormatter
        ? { provide: _titleFormatter(), useValue: opts.titleFormatter }
        : [],
      provideTwitterCardTitle(),
    ],
  })
  return injectOneMetadataManager()
}
