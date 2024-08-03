import { _maybeNonHttpUrlDevMessage } from './maybe-non-http-url-dev-message'

describe('maybeNonHttpUrlDevMessage', () => {
  const sut = _maybeNonHttpUrlDevMessage

  beforeEach(() => {
    spyOn(console, 'error')
  })

  describe('when URL is valid', () => {
    // noinspection HttpUrlsUsage
    const TEST_CASES = [
      { url: undefined, case: 'is not defined' },
      { url: 'http://example.com/image.jpg', case: 'uses HTTP protocol' },
      { url: 'https://example.com/image.jpg', case: 'uses HTTPS protocol' },
    ] as const
    for (const testCase of TEST_CASES) {
      describe(`like when URL ${testCase.case}`, () => {
        it('should not emit any message', () => {
          sut(testCase.url)

          expect(console.error).not.toHaveBeenCalled()
        })
      })
    }
  })

  describe('when URL is invalid', () => {
    const TEST_CASES = [
      { url: 'assets/image.png', case: 'is relative' },
      {
        url: 'ftp://example.com/image.jpg',
        case: 'uses a non-HTTP protocol (ie: ftp)',
      },
    ] as const
    for (const testCase of TEST_CASES) {
      describe(`like when URL ${testCase.case}`, () => {
        it('should emit a message about it', () => {
          sut(testCase.url)

          expect(console.error).toHaveBeenCalledWith(
            jasmine.stringContaining(testCase.url),
          )
        })
      })
    }

    it('should emit a message containing the provided extra options', () => {
      let receivedMessage: string
      ;(console.error as jasmine.Spy).and.callFake(
        (message) => (receivedMessage = message),
      )
      const opts = {
        module: 'graphTweet',
        property: 'profile image',
        link: 'https://example.com/url-error',
      } satisfies Parameters<typeof sut>[1]

      sut(TEST_CASES[0].url, opts)

      expect(receivedMessage!).toContain(opts.module)
      expect(receivedMessage!).toContain(opts.property)
      expect(receivedMessage!).toContain(opts.link)
    })
  })
})
