import { withContentAttribute } from './with-content-attribute'
import { NgxMetaElementAttributes } from './ngx-meta-element-attributes'
import { likeWhenNullOrUndefined } from '@/ngx-meta/test/like-when-null-or-undefined'

describe('with content attribute', () => {
  const sut = withContentAttribute
  const extras = { dummy: 'dummy' } satisfies NgxMetaElementAttributes

  describe('when no content is provided', () => {
    likeWhenNullOrUndefined((testCase) => {
      it('should return undefined when not providing extras', () => {
        expect(sut(testCase)).toBeUndefined()
      })

      it('should return undefined when providing extras', () => {
        expect(sut(testCase, extras)).toBeUndefined()
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
