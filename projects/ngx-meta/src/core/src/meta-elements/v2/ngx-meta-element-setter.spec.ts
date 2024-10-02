import { TestBed } from '@angular/core/testing'
import {
  NGX_META_ELEMENT_SETTER,
  NgxMetaElementSetter,
} from './ngx-meta-element-setter'
import {
  withContentAttribute,
  withNameAttribute,
} from './meta-elements-helpers'
import { htmlAttributesToJson } from './__tests__/html-attributes-to-json'
import { getMetaElementsBySelector } from './__tests__/get-meta-elements-by-selector'
import { clearMetasAfterEach } from './__tests__/clear-metas-after-each'
import { addMetaElements } from './__tests__/add-meta-elements'

describe('Meta element setter', () => {
  const dummyMetaNameAttribute = withNameAttribute('dummy')
  const dummyMetaAttributeSelector = 'name="dummy"'
  const dummyMetaContentAttribute = withContentAttribute('dummy')
  const dummyMetaAttributes = { name: 'dummy', content: 'dummy' }

  clearMetasAfterEach(dummyMetaAttributeSelector)

  describe('when no element exists yet', () => {
    describe('when no content is provided', () => {
      it('should not create the meta element', () => {
        const sut = makeSut()

        sut(dummyMetaNameAttribute, undefined)

        const elements = getMetaElementsBySelector(dummyMetaAttributeSelector)
        expect(elements).toHaveSize(0)
      })
    })

    describe('when content is provided', () => {
      it('should create the meta element', () => {
        const sut = makeSut()

        sut(dummyMetaNameAttribute, dummyMetaContentAttribute)

        const elements = getMetaElementsBySelector(dummyMetaAttributeSelector)
        expect(elements).toHaveSize(1)
        const element = elements[0]
        expect(htmlAttributesToJson(element.attributes)).toEqual(
          dummyMetaAttributes,
        )
      })
    })
  })

  describe('when an element already exists', () => {
    let sut: NgxMetaElementSetter

    beforeEach(() => {
      sut = makeSut()
      addMetaElements([dummyMetaAttributes])
      expect(getMetaElementsBySelector(dummyMetaAttributeSelector))
        .withContext('test setup: element should exist')
        .toHaveSize(1)
    })

    describe('when no content is provided', () => {
      it('should remove the element', () => {
        sut(dummyMetaNameAttribute, undefined)

        expect(
          getMetaElementsBySelector(dummyMetaAttributeSelector),
        ).toHaveSize(0)
      })
    })

    describe('when content is provided', () => {
      const anotherContent = 'another-dummy-content'

      it('should update the element', () => {
        sut(dummyMetaNameAttribute, withContentAttribute(anotherContent))

        const elements = getMetaElementsBySelector(dummyMetaAttributeSelector)
        expect(elements).toHaveSize(1)
        const element = elements[0]
        expect(htmlAttributesToJson(element.attributes)).toEqual({
          ...dummyMetaAttributes,
          content: anotherContent,
        })
      })
    })
  })

  describe('with content attribute utility function', () => {
    const sut = withContentAttribute

    describe('when no content is provided', () => {
      const TEST_CASES = [null, undefined]

      TEST_CASES.forEach((testCase) => {
        describe(`like when ${testCase}`, () => {
          it('should return nothing', () => {
            expect(sut(testCase)).toBeUndefined()
          })
        })
      })
    })

    describe('when content is provided', () => {
      const dummyContent = 'dummy'

      it('should return the content value inside the content key', () => {
        expect(sut(dummyContent)).toEqual({ content: dummyContent })
      })
    })
  })
})

const makeSut = (): NgxMetaElementSetter => {
  TestBed.configureTestingModule({})
  return TestBed.inject(NGX_META_ELEMENT_SETTER)
}
