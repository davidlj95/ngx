import { withContentAttribute } from './with-content-attribute'
import { NgxMetaElementAttributes } from './ngx-meta-element-attributes'

describe('with content attribute', () => {
  const sut = withContentAttribute
  const extras = { dummy: 'dummy' } satisfies NgxMetaElementAttributes

  describe('when no content is provided', () => {
    const TEST_CASES = [null, undefined]

    TEST_CASES.forEach((testCase) => {
      describe(`like when ${testCase}`, () => {
        describe('when not providing extras', () => {
          it('should return undefined', () => {
            expect(sut(testCase)).toBeUndefined()
          })
        })

        describe('when providing extras', () => {
          it('should return undefined', () => {
            expect(sut(testCase, extras)).toBeUndefined()
          })
        })
      })
    })
  })

  describe('when content is provided', () => {
    const content = 'dummy'

    describe('when not providing extras', () => {
      it('should return an object containing the given content in the content key', () => {
        expect(sut(content)).toEqual({ content })
      })
    })

    describe('when providing extras', () => {
      it('should return an object containing the given content in the content key plus extras', () => {
        expect(sut(content, extras)).toEqual({ content, ...extras })
      })
    })
  })
})
