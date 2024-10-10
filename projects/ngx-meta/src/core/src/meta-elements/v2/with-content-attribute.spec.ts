import { withContentAttribute } from './with-content-attribute'

describe('with content attribute', () => {
  const sut = withContentAttribute

  describe('when no content is provided', () => {
    const TEST_CASES = [null, undefined]

    TEST_CASES.forEach((testCase) => {
      describe(`like when ${testCase}`, () => {
        it('should return undefined', () => {
          expect(sut(testCase)).toBeUndefined()
        })
      })
    })
  })

  describe('when content is provided', () => {
    it('should return an object containing the given content in the content key', () => {
      const content = 'dummy'
      expect(sut(content)).toEqual({ content })
    })
  })
})
