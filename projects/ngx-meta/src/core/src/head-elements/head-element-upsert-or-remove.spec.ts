import { TestBed } from '@angular/core/testing'

import { HeadElementHarness } from './__tests__/head-element-harness'
import { DOCUMENT } from '@angular/common'
import {
  _headElementUpsertOrRemove,
  _HeadElementUpsertOrRemove,
} from './head-element-upsert-or-remove'

describe('Head element upsert or remove', () => {
  let sut: _HeadElementUpsertOrRemove
  let headElementHarness: HeadElementHarness

  beforeEach(() => {
    sut = makeSut()
    headElementHarness = new HeadElementHarness(TestBed.inject(DOCUMENT))
  })
  afterEach(() => {
    headElementHarness.remove(headElementHarness.dummySelector)
  })

  describe('when no element exists yet', () => {
    beforeEach(() => {
      expect(headElementHarness.getAll(headElementHarness.dummySelector))
        .withContext('element does not exist already')
        .toHaveSize(0)
    })

    describe('when element factory returns an element', () => {
      let dummyElement: HTMLElement

      beforeEach(() => {
        sut(
          headElementHarness.dummySelector,
          (document) =>
            (dummyElement = headElementHarness.createDummyElement(
              'dummy',
              document,
            )),
        )
      })

      it('should append it to head', () => {
        const elements = headElementHarness.getAll(
          headElementHarness.dummySelector,
        )
        expect(elements).toHaveSize(1)
        const element = elements[0]
        expect(element).toEqual(dummyElement)
      })
    })

    describe('when element factory returns nothing', () => {
      it('should do nothing', () => {
        sut(headElementHarness.dummySelector, () => undefined)

        expect(
          headElementHarness.getAll(headElementHarness.dummySelector),
        ).toHaveSize(0)
      })
    })
  })

  describe('when an element already exists', () => {
    beforeEach(() => {
      headElementHarness.createAndAppendDummyElement('dummy 1')
      expect(headElementHarness.getAll(headElementHarness.dummySelector))
        .withContext('element exists already')
        .toHaveSize(1)
    })

    describe('when element factory returns an element', () => {
      let anotherDummyElement: HTMLElement

      beforeEach(() => {
        sut(
          headElementHarness.dummySelector,
          (document) =>
            (anotherDummyElement = headElementHarness.createDummyElement(
              'dummy 2',
              document,
            )),
        )
      })

      it('should update it', () => {
        const elements = headElementHarness.getAll(
          headElementHarness.dummySelector,
        )
        expect(elements).toHaveSize(1)
        const element = elements[0]
        expect(element).toEqual(anotherDummyElement)
      })
    })

    describe('when element factory returns nothing', () => {
      it('should remove it', () => {
        sut(headElementHarness.dummySelector, () => undefined)

        expect(
          headElementHarness.getAll(headElementHarness.dummySelector),
        ).toHaveSize(0)
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({})
  return TestBed.inject(_headElementUpsertOrRemove())
}
