import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import {
  _headElementUpsertOrRemove,
  _HeadElementUpsertOrRemove,
  _urlResolver,
  _UrlResolver,
  NgxMetaMetadataManager,
} from '@davidlj95/ngx-meta/core'
import { TestBed } from '@angular/core/testing'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'
import { Standard } from '../types'
import { STANDARD_CANONICAL_URL_METADATA_PROVIDER } from './standard-canonical-url-metadata-provider'
import { likeWhenNullOrUndefined } from '@/ngx-meta/test/like-when-null-or-undefined'
import { DOCUMENT } from '@angular/common'

describe('Standard canonical URL metadata manager', () => {
  enableAutoSpy()

  const LINK_REL_CANONICAL_SELECTOR = "link[rel='canonical']"
  let headElementUpsertOrRemove: jasmine.Spy<_HeadElementUpsertOrRemove>
  let receivedSelector: Parameters<_HeadElementUpsertOrRemove>[0] | undefined
  let receivedElementFactory!: Parameters<_HeadElementUpsertOrRemove>[1]

  beforeEach(() => {
    headElementUpsertOrRemove = jasmine
      .createSpy<_HeadElementUpsertOrRemove>('Head element upsert or remove')
      .and.callFake((selector, elementFactory) => {
        receivedSelector = selector
        receivedElementFactory = elementFactory
      })
  })

  describe('when no URL is given', () => {
    likeWhenNullOrUndefined((testCase) => {
      it('should remove the link rel canonical element from the head', () => {
        const sut = makeSut({ headElementUpsertOrRemove })

        sut.set(testCase)

        expect(receivedSelector).toEqual(LINK_REL_CANONICAL_SELECTOR)
        expect(receivedElementFactory(injectDocument())).toBeUndefined()
      })
    })
  })

  describe('when URL is given', () => {
    const dummyRelativeUrl = 'dummy-url'
    const dummyAbsoluteUrl = 'https://example.com/dummy-resolved-url'

    it('should upsert the link element', () => {
      const sut = makeSut({ headElementUpsertOrRemove })

      sut.set(dummyAbsoluteUrl)

      expect(receivedSelector).toEqual(LINK_REL_CANONICAL_SELECTOR)
      const receivedElement = receivedElementFactory(injectDocument())
      expect(receivedElement?.tagName.toLowerCase()).toEqual('link')
      expect(receivedElement?.getAttribute('rel')).toEqual('canonical')
      expect(receivedElement?.getAttribute('href')).toEqual(dummyAbsoluteUrl)
    })

    it('should resolve the given URL and upsert the link element with the result', () => {
      const urlResolver = jasmine
        .createSpy<_UrlResolver>('URL resolver')
        .and.returnValue(dummyAbsoluteUrl)
      const sut = makeSut({ headElementUpsertOrRemove, urlResolver })

      sut.set(dummyRelativeUrl)

      expect(
        receivedElementFactory(injectDocument())?.getAttribute('href'),
      ).toEqual(dummyAbsoluteUrl)
    })

    it('should log a message when resolved URL is not absolute', () => {
      spyOn(console, 'warn')
      const urlResolver = jasmine
        .createSpy<_UrlResolver>('URL resolver')
        .and.returnValue(dummyRelativeUrl)

      const sut = makeSut({ urlResolver })

      sut.set(dummyRelativeUrl)

      expect(console.warn).toHaveBeenCalledWith(
        jasmine.stringContaining('should be absolute'),
      )
    })
  })
})

const makeSut = (
  opts: {
    headElementUpsertOrRemove?: _HeadElementUpsertOrRemove
    urlResolver?: _UrlResolver
  } = {},
): NgxMetaMetadataManager<Standard['canonicalUrl']> => {
  TestBed.configureTestingModule({
    providers: [
      {
        provide: _headElementUpsertOrRemove(),
        useValue:
          opts.headElementUpsertOrRemove ??
          jasmine
            .createSpy('Head element upsert or remove')
            .and.callFake((_, elementFactory) => {
              elementFactory(TestBed.inject(DOCUMENT))
            }),
      },
      {
        provide: _urlResolver(),
        useValue:
          opts.urlResolver ??
          jasmine
            .createSpy<_UrlResolver>('URL Resolver')
            .and.callFake((url) => url?.toString()),
      },
      STANDARD_CANONICAL_URL_METADATA_PROVIDER,
    ],
  })
  return injectOneMetadataManager()
}

const injectDocument = () => TestBed.inject(DOCUMENT)
