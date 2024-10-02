import { noOpRelativeUrlResolver } from './no-op-relative-url-resolver'
import { ANGULAR_ROUTER_URL } from './angular-router-url'
import { RelativeUrlResolver } from './relative-url-resolver'

describe('No Op relative URL resolver', () => {
  const sut = noOpRelativeUrlResolver

  beforeEach(() => {
    spyOn(console, 'warn')
  })

  describe('when Angular router URL is given', () => {
    const url: Parameters<RelativeUrlResolver>[0] = ANGULAR_ROUTER_URL

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

  describe('when a relative URL is given', () => {
    const url = 'url'

    it('should not log anything', () => {
      sut(url)

      expect(console.warn).not.toHaveBeenCalled()
    })

    it('should return input URL as is', () => {
      expect(sut(url)).toEqual(url)
    })
  })
})
