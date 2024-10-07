import { TestBed } from '@angular/core/testing'
import {
  _URL_RESOLVER,
  _UrlResolver,
  NgxMetaMetadataManager,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph } from '../../types'
import { OPEN_GRAPH_URL_METADATA_PROVIDER } from './open-graph-url-metadata-provider'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { MockProvider } from 'ng-mocks'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'

describe('Open Graph URL metadata manager', () => {
  enableAutoSpy()
  let urlResolver: jasmine.Spy<_UrlResolver>
  let sut: NgxMetaMetadataManager<OpenGraph['url']>
  let metaService: jasmine.SpyObj<NgxMetaMetaService>
  const dummyUrl = 'dummy-url'
  const dummyResolvedUrl = 'https://example.com/dummy-resolved-url'

  beforeEach(() => {
    urlResolver = jasmine.createSpy().and.returnValue(dummyResolvedUrl)
    sut = makeSut({ urlResolver })
    metaService = TestBed.inject(
      NgxMetaMetaService,
    ) as jasmine.SpyObj<NgxMetaMetaService>
  })

  it('should use resolved URL as metadata value', () => {
    sut.set(dummyUrl)

    expect(metaService.set).toHaveBeenCalledWith(
      jasmine.anything(),
      dummyResolvedUrl,
    )
    expect(urlResolver).toHaveBeenCalledWith(dummyUrl)
  })
})

function makeSut(opts: {
  urlResolver: _UrlResolver
}): NgxMetaMetadataManager<OpenGraph['url']> {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(NgxMetaMetaService),
      {
        provide: _URL_RESOLVER,
        useValue: opts.urlResolver ?? jasmine.createSpy(),
      },
      OPEN_GRAPH_URL_METADATA_PROVIDER,
    ],
  })
  return injectOneMetadataManager()
}
