import { TestBed } from '@angular/core/testing'
import {
  _URL_RESOLVER,
  _UrlResolver,
  MetadataSetter,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph } from '../../types'
import { OPEN_GRAPH_URL_SETTER_FACTORY } from './open-graph-url-metadata-provider'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { MockProvider } from 'ng-mocks'

describe('Open Graph URL metadata', () => {
  enableAutoSpy()
  let urlResolver: jasmine.Spy<_UrlResolver>
  let sut: MetadataSetter<OpenGraph['url']>
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
    sut(dummyUrl)

    expect(metaService.set).toHaveBeenCalledWith(
      jasmine.anything(),
      dummyResolvedUrl,
    )
    expect(urlResolver).toHaveBeenCalledWith(dummyUrl)
  })
})

function makeSut(opts: {
  urlResolver: _UrlResolver
}): MetadataSetter<OpenGraph['url']> {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(NgxMetaMetaService),
      {
        provide: _URL_RESOLVER,
        useValue: opts.urlResolver ?? jasmine.createSpy(),
      },
    ],
  })
  return OPEN_GRAPH_URL_SETTER_FACTORY(
    TestBed.inject(NgxMetaMetaService),
    TestBed.inject(_URL_RESOLVER),
  )
}
