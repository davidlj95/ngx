import {
  withContentAttribute,
  withNameAttribute,
} from './meta-elements-helpers'
import { getMetaElementsBySelector } from './__tests__/get-meta-elements-by-selector'
import { TestBed } from '@angular/core/testing'
import {
  NGX_META_ELEMENTS_SETTER,
  NgxMetaElementsSetter,
} from './ngx-meta-elements-setter'
import { htmlAttributesToJson } from './__tests__/html-attributes-to-json'
import { clearMetasAfterEach } from './__tests__/clear-metas-after-each'
import { addMetaElements } from './__tests__/add-meta-elements'

describe('Meta elements setter', () => {
  const dummyMetaNameAttribute = withNameAttribute('dummy')
  const dummyMetaAttributeSelector = 'name="dummy"'
  const dummyMetaContentAttribute = withContentAttribute('dummy')
  const dummyMetaAttributes = { name: 'dummy', content: 'dummy' }
  const anotherDummyMetaContentAttribute = withContentAttribute('another-dummy')
  const anotherDummyMetaAttributes = { name: 'dummy', content: 'another-dummy' }

  clearMetasAfterEach(dummyMetaAttributeSelector)

  describe('when no elements exist yet', () => {
    describe('when no contents are provided', () => {
      it('should not create any element', () => {
        const sut = makeSut()

        sut(dummyMetaNameAttribute, [])

        expect(
          getMetaElementsBySelector(dummyMetaAttributeSelector),
        ).toHaveSize(0)
      })
    })

    describe('when contents are provided', () => {
      it('should create an element for each one', () => {
        const sut = makeSut()
        sut(dummyMetaNameAttribute, [
          dummyMetaContentAttribute,
          anotherDummyMetaContentAttribute,
        ])

        const elements = getMetaElementsBySelector(dummyMetaAttributeSelector)
        expect(
          elements.map((e) => e.attributes).map(htmlAttributesToJson),
        ).toEqual([dummyMetaAttributes, anotherDummyMetaAttributes])
      })
    })
  })

  describe('when elements exist already', () => {
    let sut: NgxMetaElementsSetter

    beforeEach(() => {
      sut = makeSut()

      const dummyNameAttribute = {
        [dummyMetaNameAttribute[0]]: dummyMetaNameAttribute[1],
      }
      addMetaElements([
        {
          ...dummyNameAttribute,
          content: 'existing-content-1',
        },
        {
          ...dummyNameAttribute,
          content: 'existing-content-2',
        },
      ])
      expect(getMetaElementsBySelector(dummyMetaAttributeSelector))
        .withContext('test setup: two elements should exist')
        .toHaveSize(2)
    })

    describe('when no contents are provided', () => {
      it('should remove them all', () => {
        sut(dummyMetaNameAttribute, [])

        expect(
          getMetaElementsBySelector(dummyMetaAttributeSelector),
        ).toHaveSize(0)
      })
    })

    describe('when contents are provided', () => {
      it('should replace existing elements', () => {
        sut(dummyMetaNameAttribute, [
          dummyMetaContentAttribute,
          anotherDummyMetaContentAttribute,
        ])

        expect(
          getMetaElementsBySelector(dummyMetaAttributeSelector)
            .map((e) => e.attributes)
            .map(htmlAttributesToJson),
        ).toEqual([dummyMetaAttributes, anotherDummyMetaAttributes])
      })
    })
  })
})

const makeSut = () => {
  TestBed.configureTestingModule({})
  return TestBed.inject(NGX_META_ELEMENTS_SETTER)
}
