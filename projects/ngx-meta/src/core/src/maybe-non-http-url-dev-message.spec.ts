import { _maybeNonHttpUrlDevMessage } from './maybe-non-http-url-dev-message'
import { DUMMY_FORMAT_DEV_MESSAGE_OPTIONS } from './__tests__/dummy-format-dev-message-options'

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
          sut(testCase.url, DUMMY_FORMAT_DEV_MESSAGE_OPTIONS)

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
          sut(testCase.url, DUMMY_FORMAT_DEV_MESSAGE_OPTIONS)

          expect(console.error).toHaveBeenCalledWith(
            jasmine.stringContaining('URL must be absolute'),
          )
        })
      })
    }
  })
})
