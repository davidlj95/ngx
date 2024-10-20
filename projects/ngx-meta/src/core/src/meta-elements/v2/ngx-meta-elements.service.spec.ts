import { TestBed } from '@angular/core/testing'
import { NgxMetaElementsService } from './ngx-meta-elements.service'
import { withNameAttribute } from './with-name-attribute'
import { withContentAttribute } from './with-content-attribute'
import { Meta, MetaDefinition } from '@angular/platform-browser'
import { NgxMetaElementNameAttribute } from './ngx-meta-element-name-attribute'
import { NgxMetaElementAttributes } from './ngx-meta-element-attributes'

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

  const whenNoContentsAreProvided = (
    tests: (testCase: readonly [] | undefined) => void,
  ) => {
    describe('when no contents are provided', () => {
      const TEST_CASES = [
        [[], 'empty array'],
        [undefined, 'undefined'],
      ] as const
      TEST_CASES.forEach(([testCase, testCaseName]) => {
        describe(`like when ${testCaseName}`, () => {
          tests(testCase)
        })
      })
    })
  }

  const whenSingleContentIsProvided = (
    tests: (
      nameAttribute: NgxMetaElementNameAttribute,
      contentAttributes: NgxMetaElementAttributes,
      expectedAttributes: NgxMetaElementAttributes,
    ) => void,
  ) => {
    describe('when a single content is provided', () => {
      tests(
        dummyMetaNameAttribute,
        dummyMetaContentAttribute,
        dummyMetaAttributes,
      )
    })
  }

  const whenMultipleContentsAreProvided = (
    tests: (
      nameAttribute: NgxMetaElementNameAttribute,
      contentAttributes: ReadonlyArray<NgxMetaElementAttributes>,
      expectedAttributes: ReadonlyArray<NgxMetaElementAttributes>,
    ) => void,
  ) => {
    describe('when multiple contents are provided', () => {
      tests(
        dummyMetaNameAttribute,
        [
          dummyMetaContentAttribute,
          anotherDummyMetaContentAttribute,
          yetAnotherDummyMetaContentAttribute,
        ],
        [
          dummyMetaAttributes,
          anotherDummyMetaAttributes,
          yetAnotherDummyMetaAttributes,
        ],
      )
    })
  }

  describe('when no elements exist', () => {
    whenNoContentsAreProvided((testCase) => {
      it('should not create any element', () => {
        const sut = makeSut()

        sut.set(dummyMetaNameAttribute, testCase)

        expect(getDummyMetaElements()).toHaveSize(0)
      })
    })

    whenSingleContentIsProvided(
      (nameAttribute, contentAttributes, expectedAttributes) => {
        it('should create the element', () => {
          const sut = makeSut()
          sut.set(nameAttribute, contentAttributes)

          const elements = getDummyMetaElements()

          expect(elements.length).toBe(1)
          const element = elements[0]

          expect(htmlAttributesToJson(element.attributes)).toEqual(
            expectedAttributes,
          )
        })
      },
    )

    whenMultipleContentsAreProvided(
      (nameAttribute, contentAttributes, expectedAttributes) => {
        it('should create an element for each one', () => {
          const sut = makeSut()
          sut.set(nameAttribute, contentAttributes)

          const elements = getDummyMetaElements()

          expect(
            elements.map((e) => e.attributes).map(htmlAttributesToJson),
          ).toEqual(expectedAttributes)
        })
      },
    )
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
    })

    whenNoContentsAreProvided((testCase) => {
      it('should remove them all', () => {
        sut.set(dummyMetaNameAttribute, testCase)

        expect(getDummyMetaElements()).toHaveSize(0)
      })
    })

    whenSingleContentIsProvided(
      (nameAttribute, contentAttributes, expectedAttributes) => {
        it('should remove existing elements and create the new one', () => {
          sut.set(nameAttribute, contentAttributes)

          const elements = getDummyMetaElements()

          expect(elements.length).toBe(1)
          const element = elements[0]

          expect(htmlAttributesToJson(element.attributes)).toEqual(
            expectedAttributes,
          )
        })
      },
    )

    whenMultipleContentsAreProvided(
      (nameAttribute, contentAttributes, expectedAttributes) => {
        it('should remove existing elements and create new ones', () => {
          sut.set(nameAttribute, contentAttributes)

          expect(
            getDummyMetaElements()
              .map((e) => e.attributes)
              .map(htmlAttributesToJson),
          ).toEqual(expectedAttributes)
        })
      },
    )
  })
})

const makeSut = () => TestBed.inject(NgxMetaElementsService)

export const htmlAttributesToJson = (attributes: NamedNodeMap): object =>
  [...Array(attributes.length).keys()]
    .map((index) => attributes.item(index))
    .map((item) => (item ? { [item.name]: item.value } : {}))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {})
