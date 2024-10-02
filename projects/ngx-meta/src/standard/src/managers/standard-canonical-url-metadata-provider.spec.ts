import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import {
  _HEAD_ELEMENT_UPSERT_OR_REMOVE,
  _HeadElementUpsertOrRemove,
  _URL_RESOLVER,
  _UrlResolver,
} from '@davidlj95/ngx-meta/core'
import { TestBed } from '@angular/core/testing'
import { STANDARD_CANONICAL_URL_SETTER_FACTORY } from './standard-canonical-url-metadata-provider'
import { DOCUMENT } from '@angular/common'

describe('Standard canonical URL metadata provider', () => {
  enableAutoSpy()

  const LINK_REL_CANONICAL_SELECTOR = "link[rel='canonical']"

  describe('when no URL is given', () => {
    const TEST_CASES = [undefined, null]
    TEST_CASES.forEach((testCase) => {
      describe(`like when ${testCase}`, () => {
        it('should remove the link rel canonical element from the head', () => {
          const headElementUpsertOrRemove =
            jasmine.createSpy<_HeadElementUpsertOrRemove>()
          const sut = makeSut({ headElementUpsertOrRemove })

          sut(testCase)

          expect(headElementUpsertOrRemove).toHaveBeenCalledWith(
            LINK_REL_CANONICAL_SELECTOR,
            jasmine.falsy(),
          )
        })
      })
    })
  })

  describe('when URL is given', () => {
    const dummyRelativeUrl = 'dummy-url'
    const dummyAbsoluteUrl = 'https://example.com/dummy-resolved-url'

    it('should upsert the link element', () => {
      let receivedSelector:
        | Parameters<_HeadElementUpsertOrRemove>[0]
        | undefined
      let receivedElement: Parameters<_HeadElementUpsertOrRemove>[1]
      const headElementUpsertOrRemove = jasmine
        .createSpy<_HeadElementUpsertOrRemove>()
        .and.callFake((selector, element) => {
          receivedSelector = selector
          receivedElement = element
        })
      const sut = makeSut({ headElementUpsertOrRemove })

      sut(dummyAbsoluteUrl)

      expect(receivedSelector).toEqual(LINK_REL_CANONICAL_SELECTOR)
      expect(receivedElement?.tagName.toLowerCase()).toEqual('link')
      expect(receivedElement?.getAttribute('rel')).toEqual('canonical')
      expect(receivedElement?.getAttribute('href')).toEqual(dummyAbsoluteUrl)
    })

    it('should resolve the given URL and upsert the link element with the result', () => {
      let receivedElement: Parameters<_HeadElementUpsertOrRemove>[1]
      const urlResolver = jasmine
        .createSpy<_UrlResolver>('URL resolver')
        .and.returnValue(dummyAbsoluteUrl)
      const headElementUpsertOrRemove = jasmine
        .createSpy<_HeadElementUpsertOrRemove>('Head element upsert or remove')
        .and.callFake((_, element) => {
          receivedElement = element
        })

      const sut = makeSut({ headElementUpsertOrRemove, urlResolver })

      sut(dummyRelativeUrl)

      expect(receivedElement?.getAttribute('href')).toEqual(dummyAbsoluteUrl)
    })

    it('should log a message when resolved URL is not absolute', () => {
      spyOn(console, 'warn')
      const urlResolver = jasmine
        .createSpy<_UrlResolver>('URL resolver')
        .and.returnValue(dummyRelativeUrl)

      const sut = makeSut({ urlResolver })

      sut(dummyRelativeUrl)

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
) => {
  TestBed.configureTestingModule({
    providers: [
      {
        provide: _HEAD_ELEMENT_UPSERT_OR_REMOVE,
        useValue:
          opts.headElementUpsertOrRemove ??
          jasmine.createSpy('Head element upsert or remove'),
      },
      {
        provide: _URL_RESOLVER,
        useValue:
          opts.urlResolver ??
          jasmine
            .createSpy<_UrlResolver>('URL Resolver')
            .and.callFake((url) => url?.toString()),
      },
    ],
  })
  return STANDARD_CANONICAL_URL_SETTER_FACTORY(
    TestBed.inject(_HEAD_ELEMENT_UPSERT_OR_REMOVE),
    TestBed.inject(DOCUMENT),
    TestBed.inject(_URL_RESOLVER),
  )
}