import { TestBed } from '@angular/core/testing'
import { _URL_RESOLVER, _UrlResolver } from './url-resolver'
import {
  _RELATIVE_URL_RESOLVER,
  _RelativeUrlResolver,
} from './relative-url-resolver'
import { _NO_OP_RELATIVE_URL_RESOLVER_PROVIDER } from './no-op-relative-url-resolver'

describe('URL resolver', () => {
  describe('when no URL is given', () => {
    const TEST_CASES = [null, undefined]
    TEST_CASES.forEach((testCase) => {
      describe(`like when URL is ${testCase}`, () => {
        it(`should return ${testCase}`, () => {
          const sut = makeSut()

          expect(sut(testCase)).toEqual(testCase)
        })
      })
    })
  })

  describe('when URL is absolute', () => {
    const absoluteUrlString = 'https://absolute.example.com'
    const TEST_CASES = [
      { absoluteUrl: absoluteUrlString },
      { absoluteUrl: new URL(absoluteUrlString) },
    ] satisfies ReadonlyArray<{ absoluteUrl: URL | string }>

    TEST_CASES.forEach((testCase) => {
      describe(`like a URL ${typeof testCase.absoluteUrl}`, () => {
        let sut: _UrlResolver
        let relativeUrlResolver: jasmine.Spy<_RelativeUrlResolver>

        beforeEach(() => {
          relativeUrlResolver = jasmine.createSpy()
          sut = makeSut({ relativeUrlResolver })
        })

        it('should return the given absolute URL as a string', () => {
          expect(sut(testCase.absoluteUrl)).toEqual(
            testCase.absoluteUrl.toString(),
          )
        })

        it(`should not use the relative URL resolver`, () => {
          sut(testCase.absoluteUrl)

          expect(relativeUrlResolver).not.toHaveBeenCalled()
        })
      })
    })
  })

  describe('when URL is relative', () => {
    const relativeUrl = 'foo'
    const dummyResolvedUrl = 'dummy-resolved-url'

    let sut: _UrlResolver
    let relativeUrlResolver: jasmine.Spy<_RelativeUrlResolver>

    beforeEach(() => {
      relativeUrlResolver = jasmine
        .createSpy()
        .and.returnValue(dummyResolvedUrl)

      sut = makeSut({ relativeUrlResolver })
    })

    it('should return the resolved URL', () => {
      expect(sut(relativeUrl)).toEqual(dummyResolvedUrl)
      expect(relativeUrlResolver).toHaveBeenCalledWith(relativeUrl)
    })
  })
})

const makeSut = (
  opts: {
    relativeUrlResolver?: _RelativeUrlResolver
  } = {},
) => {
  TestBed.configureTestingModule({
    providers: [
      _NO_OP_RELATIVE_URL_RESOLVER_PROVIDER,
      opts.relativeUrlResolver
        ? {
            provide: _RELATIVE_URL_RESOLVER,
            useValue: opts.relativeUrlResolver,
          }
        : [],
    ],
  })
  return TestBed.inject(_URL_RESOLVER)
}
