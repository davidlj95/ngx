import { _formatDevMessage } from './format-dev-message'

describe('Developer message formatter', () => {
  const sut = _formatDevMessage
  const message = 'Hello World'
  const module = 'core'

  it('should contain message', () => {
    expect(sut(message, { module })).toContain(message)
  })

  it('should prefix message with package name and module', () => {
    expect(sut(message, { module })).toEqual(
      jasmine.stringMatching(`^ngx-meta/${module}`),
    )
  })

  describe('when property name is not provided', () => {
    it('should start message with given message', () => {
      const actual = sut(message, { module })
      const prefixAndMessage = actual.split(':')

      expect(prefixAndMessage[1]).toEqual(
        jasmine.stringMatching(`^ ${message}`),
      )
    })
  })

  describe('when property name is provided', () => {
    const property = 'a-bar-prop'

    it('should start message with property name if provided', () => {
      const actual = sut(message, { module, property })
      const prefixAndMessage = actual.split(':')

      expect(prefixAndMessage[1]).toEqual(
        jasmine.stringMatching(`^ ${property}`),
      )
    })
  })

  describe('when value is provided', () => {
    const value = 'a-foo-value'

    it('should contain referred value in body', () => {
      const actual = sut(message, { module, value })
      const body = actual.split('\n')

      expect(body[1]).toEqual(jasmine.stringMatching(`^-> Value: "${value}"`))
    })
  })

  describe('when link is provided', () => {
    const link = 'https://example.com/help/42'

    it('should contain link line', () => {
      const actual = sut(message, { module, link })
      const linkLine = actual.split('\n')

      expect(linkLine[1]).toEqual(
        jasmine.stringMatching(`^For more information, see ${link}`),
      )
    })
  })
})
