import { _maybeNonHttpUrlDevMessage } from './maybe-non-http-url-dev-message'

describe('maybeNonHttpUrlDevMessage', () => {
  const sut = _maybeNonHttpUrlDevMessage

  beforeEach(() => {
    spyOn(console, 'error')
  })

  // noinspection HttpUrlsUsage
  const NO_MSG_TEST_CASES = [
    { url: undefined, case: 'is not defined' },
    { url: 'http://example.com/image.jpg', case: 'uses HTTP protocol' },
    { url: 'https://example.com/image.jpg', case: 'uses HTTPS protocol' },
  ] as const
  for (const testCase of NO_MSG_TEST_CASES) {
    describe(`when URL ${testCase.case}`, () => {
      it('should not emit any message', () => {
        sut(testCase.url)

        expect(console.error).not.toHaveBeenCalled()
      })
    })
  }

  describe('when URL does not use HTTP or HTTPS protocol', () => {
    it('should emit a message about it', () => {
      let receivedMessage: string
      ;(console.error as jasmine.Spy).and.callFake(
        (message) => (receivedMessage = message),
      )
      const invalidUrl = 'ftp://example.com/image.jpg'
      const opts = {
        module: 'graphTweet',
        property: 'profile image',
        link: 'https://example.com/url-error',
      } satisfies Parameters<typeof sut>[1]

      sut(invalidUrl, opts)

      expect(console.error).toHaveBeenCalled()
      expect(receivedMessage!).toContain(invalidUrl)
      expect(receivedMessage!).toContain(opts.module)
      expect(receivedMessage!).toContain(opts.property)
      expect(receivedMessage!).toContain(opts.link)
    })
  })
})
