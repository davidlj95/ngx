import { noOpUrlResolver } from './no-op-url-resolver'
import { ANGULAR_ROUTER_URL, AngularRouterUrl } from './angular-router-url'
import { likeWhenNullOrUndefined } from '@/ngx-meta/test/like-when-null-or-undefined'

describe('No Op URL resolver', () => {
  const sut = noOpUrlResolver

  beforeEach(() => {
    spyOn(console, 'warn')
  })

  describe('when Angular router URL is given', () => {
    const url: AngularRouterUrl = ANGULAR_ROUTER_URL

    it('should log a message when an Angular router URL is used as value', () => {
      sut(url)

      expect(console.warn).toHaveBeenCalledWith(
        jasmine.stringContaining('relative URL resolution is needed'),
      )
    })

    it('should return Angular URL router symbol as string', () => {
      expect(sut(url)).toEqual(ANGULAR_ROUTER_URL.toString())
    })
  })

  describe('when no URL is given', () => {
    likeWhenNullOrUndefined((testCase) => {
      it(`should return ${testCase}`, () => {
        expect(sut(testCase)).toEqual(testCase)
      })
    })
  })

  describe('when any URL is given', () => {
    const TEST_CASES = ['', 'relative-url', 'https://example.com/app/page']
    TEST_CASES.forEach((testCase) => {
      describe(`like when URL is ${testCase}`, () => {
        it('should not log anything', () => {
          sut(testCase)

          expect(console.warn).not.toHaveBeenCalled()
        })

        it('should return input URL as is', () => {
          expect(sut(testCase)).toEqual(testCase)
        })
      })
    })
  })
})
