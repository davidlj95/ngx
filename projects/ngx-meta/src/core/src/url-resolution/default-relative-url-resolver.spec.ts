import { TestBed } from '@angular/core/testing'
import { provideRouter } from '@angular/router'
import { RouterTestingHarness } from '@angular/router/testing'
import { ANGULAR_ROUTER_URL } from './angular-router-url'
import { _URL_RESOLVER } from './url-resolver'
import { provideDefaultRelativeUrlResolver } from './default-relative-url-resolver'
import { Component } from '@angular/core'

describe('Default relative URL resolver', () => {
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

async function makeSut(opts: { baseUrl: string; initialUrl?: string }) {
  @Component({ template: '', standalone: true })
  class EmptyComponent {}

  TestBed.configureTestingModule({
    providers: [
      provideDefaultRelativeUrlResolver(opts.baseUrl),
      opts.initialUrl
        ? provideRouter([
            {
              path: opts.initialUrl,
              component: EmptyComponent,
            },
          ])
        : [],
    ],
  })
  if (opts.initialUrl) {
    await RouterTestingHarness.create(opts.initialUrl)
  }
  return TestBed.inject(_URL_RESOLVER)
}
