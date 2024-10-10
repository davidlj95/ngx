import { TestBed } from '@angular/core/testing'
import { NgxMetaElementsService } from './ngx-meta-elements.service'
import { withNameAttribute } from './with-name-attribute'
import { withContentAttribute } from './with-content-attribute'
import { Meta, MetaDefinition } from '@angular/platform-browser'

describe('Meta element service', () => {
  const dummyMetaNameAttribute = withNameAttribute('dummy')
  const dummyMetaNameAttributeKeyValue = { name: 'dummy' }
  const dummyMetaContentAttribute = withContentAttribute('dummy')
  const dummyMetaAttributes = {
    ...dummyMetaNameAttributeKeyValue,
    content: 'dummy',
  }

  const anotherDummyMetaContentAttribute = withContentAttribute('another-dummy')
  const anotherDummyMetaAttributes = {
    ...dummyMetaNameAttributeKeyValue,
    content: 'another-dummy',
  }

  const yetAnotherDummyMetaContentAttribute =
    withContentAttribute('yet-another-dummy')
  const yetAnotherDummyMetaAttributes = {
    ...dummyMetaNameAttributeKeyValue,
    content: 'yet-another-dummy',
  }

  const getDummyMetaElements = () =>
    TestBed.inject(Meta).getTags('name="dummy"')

  afterEach(() => {
    getDummyMetaElements().forEach((element) => element.remove())
  })

  describe('when no elements exist', () => {
    describe('when no contents are provided', () => {
      const TEST_CASES = [
        [[], 'empty array'],
        [undefined, 'undefined'],
      ] as const

      TEST_CASES.forEach(([testCase, testCaseName]) => {
        describe(`like when ${testCaseName}`, () => {
          it('should not create any element', () => {
            const sut = makeSut()

            sut.set(dummyMetaNameAttribute, testCase)

            expect(getDummyMetaElements()).toHaveSize(0)
          })
        })
      })
    })

    describe('when contents are provided', () => {
      describe('when a single content is provided', () => {
        it('should create the element', () => {
          const sut = makeSut()
          sut.set(dummyMetaNameAttribute, dummyMetaContentAttribute)

          const elements = getDummyMetaElements()
          expect(elements.length).toBe(1)
          const element = elements[0]
          expect(htmlAttributesToJson(element.attributes)).toEqual(
            dummyMetaAttributes,
          )
        })
      })

      describe('when multiple contents are provided', () => {
        it('should create an element for each one', () => {
          const sut = makeSut()
          sut.set(dummyMetaNameAttribute, [
            dummyMetaContentAttribute,
            anotherDummyMetaContentAttribute,
          ])

          const elements = getDummyMetaElements()
          expect(
            elements.map((e) => e.attributes).map(htmlAttributesToJson),
          ).toEqual([dummyMetaAttributes, anotherDummyMetaAttributes])
        })
      })
    })
  })

  describe('when elements exist', () => {
    let sut: NgxMetaElementsService

    beforeEach(() => {
      sut = makeSut()

      const dummyNameAttribute = {
        [dummyMetaNameAttribute[0]]: dummyMetaNameAttribute[1],
      }
      TestBed.inject(Meta).addTags([
        {
          ...dummyNameAttribute,
          content: 'existing-content-1',
        },
        {
          ...dummyNameAttribute,
          content: 'existing-content-2',
        },
      ] as MetaDefinition[])
      expect(getDummyMetaElements())
        .withContext('test setup: two elements should exist')
        .toHaveSize(2)
    })

    describe('when no contents are provided', () => {
      const TEST_CASES = [
        [[], 'empty array'],
        [undefined, 'undefined'],
      ] as const

      TEST_CASES.forEach(([testCase, testCaseName]) => {
        describe(`like when ${testCaseName}`, () => {
          it('should remove them all', () => {
            sut.set(dummyMetaNameAttribute, testCase)

            expect(getDummyMetaElements()).toHaveSize(0)
          })
        })
      })
    })

    describe('when contents are provided', () => {
      describe('when a single content is provided', () => {
        it('should remove existing elements and create the new one', () => {
          sut.set(dummyMetaNameAttribute, dummyMetaContentAttribute)

          const elements = getDummyMetaElements()
          expect(elements.length).toBe(1)
          const element = elements[0]
          expect(htmlAttributesToJson(element.attributes)).toEqual(
            dummyMetaAttributes,
          )
        })
      })

      describe('when multiple contents are provided', () => {
        it('should remove existing elements and create new ones', () => {
          sut.set(dummyMetaNameAttribute, [
            dummyMetaContentAttribute,
            anotherDummyMetaContentAttribute,
            yetAnotherDummyMetaContentAttribute,
          ])

          expect(
            getDummyMetaElements()
              .map((e) => e.attributes)
              .map(htmlAttributesToJson),
          ).toEqual([
            dummyMetaAttributes,
            anotherDummyMetaAttributes,
            yetAnotherDummyMetaAttributes,
          ])
        })
      })
    })
  })
})

const makeSut = () => TestBed.inject(NgxMetaElementsService)

export const htmlAttributesToJson = (attributes: NamedNodeMap): object =>
  [...Array(attributes.length).keys()]
    .map((index) => attributes.item(index))
    .map((item) => (item ? { [item.name]: item.value } : {}))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {})
