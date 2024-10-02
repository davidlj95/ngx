import { TestBed } from '@angular/core/testing'
import { _URL_RESOLVER, _UrlResolver } from './url-resolver'
import { provideDefaultUrlResolver } from './default-url-resolver'
import { ANGULAR_ROUTER_URL } from './angular-router-url'
import { BaseUrl } from './base-url'
import { Component } from '@angular/core'
import { provideRouter } from '@angular/router'
import { RouterTestingHarness } from '@angular/router/testing'

describe('Default URL resolver', () => {
  describe('when no URL is given', () => {
    const TEST_CASES = [null, undefined]
    TEST_CASES.forEach((testCase) => {
      describe(`like when URL is ${testCase}`, () => {
        it(`should return ${testCase}`, async () => {
          const sut = await makeSut()

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

        beforeEach(async () => {
          sut = await makeSut()
        })

        it('should return the given absolute URL as a string', () => {
          expect(sut(testCase.absoluteUrl)).toEqual(
            testCase.absoluteUrl.toString(),
          )
        })
      })
    })
  })

  describe('when URL is relative', () => {
    //👇 Let the H̴u̴n̴g̴e̴r̴ Slash Games begin 🏁
    const baseUrlWithoutTrailingSlash = 'https://example.com'
    const baseUrlWithTrailingSlash = `${baseUrlWithoutTrailingSlash}/`

    const relativeUrlWithoutLeadingSlash = 'foo'
    const relativeUrlWithLeadingSlash = `/${relativeUrlWithoutLeadingSlash}`

    interface TestCase {
      baseUrl: string
      relativeUrl: string
      expectedResult: string
      description: string
      should: string
    }
    const TEST_CASES: ReadonlyArray<TestCase> = [
      {
        baseUrl: baseUrlWithTrailingSlash,
        relativeUrl: relativeUrlWithoutLeadingSlash,
        expectedResult: `${baseUrlWithTrailingSlash}${relativeUrlWithoutLeadingSlash}`,
        description:
          'base URL has a trailing slash and relative URL does not have a leading slash',
        should: 'join base URL and relative URL as is',
      },
      {
        baseUrl: baseUrlWithTrailingSlash,
        relativeUrl: relativeUrlWithLeadingSlash,
        expectedResult: `${baseUrlWithTrailingSlash}${relativeUrlWithoutLeadingSlash}`,
        description:
          'base URL has a trailing slash and relative URL has a leading slash',
        should: 'join base URL and relative URL without double slashes',
      },
      {
        baseUrl: baseUrlWithoutTrailingSlash,
        relativeUrl: relativeUrlWithoutLeadingSlash,
        expectedResult: `${baseUrlWithoutTrailingSlash}/${relativeUrlWithoutLeadingSlash}`,
        description:
          'base URL does not have a trailing slash and relative URL does not have a leading slash',
        should: 'join base URL and relative URL adding a slash between them',
      },
      {
        baseUrl: baseUrlWithoutTrailingSlash,
        relativeUrl: relativeUrlWithLeadingSlash,
        expectedResult: `${baseUrlWithoutTrailingSlash}${relativeUrlWithLeadingSlash}`,
        description:
          'base URL does not have a trailing slash and relative URL has a leading slash',
        should: 'join base URL and relative URL as is',
      },
      {
        baseUrl: baseUrlWithoutTrailingSlash,
        relativeUrl: '',
        expectedResult: baseUrlWithoutTrailingSlash,
        description:
          'base URL does not have a trailing slash and relative URL is empty',
        should: 'return base URL as is (without trailing slash)',
      },
    ]
    TEST_CASES.forEach((testCase) => {
      it(`should ${testCase.should} when ${testCase.description}`, async () => {
        const sut = await makeSut({ baseUrl: testCase.baseUrl })

        expect(sut(testCase.relativeUrl)).toEqual(testCase.expectedResult)
      })
    })

    it('should append current Angular router URL to base URL when instructed to do so', async () => {
      const baseUrl = baseUrlWithTrailingSlash
      const initialUrl = 'foo/bar'
      const sut = await makeSut({ baseUrl, initialUrl })

      expect(sut(ANGULAR_ROUTER_URL)).toEqual(`${baseUrl}${initialUrl}`)
    })
  })
})

const makeSut = async (
  opts: {
    initialUrl?: string
    baseUrl?: BaseUrl
  } = {},
) => {
  @Component({ template: '', standalone: true })
  class EmptyComponent {}

  TestBed.configureTestingModule({
    providers: [
      opts.initialUrl
        ? provideRouter([
            {
              path: opts.initialUrl,
              component: EmptyComponent,
            },
          ])
        : [],
      provideDefaultUrlResolver(opts.baseUrl ?? 'https://example.com'),
    ],
  })

  if (opts.initialUrl) {
    await RouterTestingHarness.create(opts.initialUrl)
  }

  return TestBed.inject(_URL_RESOLVER)
}
