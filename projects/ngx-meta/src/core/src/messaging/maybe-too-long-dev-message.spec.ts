import { _maybeTooLongDevMessage } from './maybe-too-long-dev-message'
import { DUMMY_FORMAT_DEV_MESSAGE_OPTIONS } from './__tests__/dummy-format-dev-message-options'

describe('Maybe too long developer message', () => {
  const sut = _maybeTooLongDevMessage

  beforeEach(() => {
    spyOn(console, 'warn')
  })

  const shouldNotEmitAnyMessage = (
    message: string | undefined,
    maxLength: number,
  ) => {
    it('should not emit any message', () => {
      sut(message, maxLength, DUMMY_FORMAT_DEV_MESSAGE_OPTIONS)

      expect(console.warn).not.toHaveBeenCalled()
    })
  }

  describe('when message is not defined', () => {
    const message = undefined

    shouldNotEmitAnyMessage(message, 300)
  })

  describe('when message is not too long', () => {
    const message = 'short'
    const maxLength = 300

    shouldNotEmitAnyMessage(message, maxLength)
  })

  describe('when message is too long', () => {
    const message = 'looooooooooooooooooooooooong'
    const maxLength = 10

    it('should emit a message about it', () => {
      sut(message, maxLength, DUMMY_FORMAT_DEV_MESSAGE_OPTIONS)

      expect(console.warn).toHaveBeenCalledWith(
        jasmine.stringContaining('exceeds recommended size'),
      )
    })
  })
})
