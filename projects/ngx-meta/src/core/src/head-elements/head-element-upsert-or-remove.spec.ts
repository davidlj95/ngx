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
  let dummyElement: HTMLElement

  beforeEach(() => {
    sut = makeSut()
    headElementHarness = new HeadElementHarness(TestBed.inject(DOCUMENT))
    dummyElement = headElementHarness.createDummyElement('dummy 1')
  })
  afterEach(() => {
    headElementHarness.remove(headElementHarness.dummySelector)
  })

  describe('when element does not exist already', () => {
    beforeEach(() => {
      expect(headElementHarness.getAll(headElementHarness.dummySelector))
        .withContext('element does not exist already')
        .toHaveSize(0)
    })

    describe('when element is not null or undefined', () => {
      it('should append it to head', () => {
        sut(headElementHarness.dummySelector, dummyElement)

        const elements = headElementHarness.getAll(
          headElementHarness.dummySelector,
        )
        expect(elements).toHaveSize(1)
        const element = elements[0]
        expect(element).toEqual(dummyElement)
      })
    })

    const TEST_CASES = [null, undefined]
    for (const TEST_CASE of TEST_CASES) {
      describe(`when element is ${TEST_CASE}`, () => {
        it('should do nothing', () => {
          sut(headElementHarness.dummySelector, TEST_CASE)

          expect(
            headElementHarness.getAll(headElementHarness.dummySelector),
          ).toHaveSize(0)
        })
      })
    }
  })

  describe('when element exists already', () => {
    beforeEach(() => {
      headElementHarness.appendElement(dummyElement)
      expect(headElementHarness.getAll(headElementHarness.dummySelector))
        .withContext('element exists already')
        .toHaveSize(1)
    })

    describe('when element is not null or undefined', () => {
      it('should update it', () => {
        const anotherDummyElement =
          headElementHarness.createDummyElement('dummy 2')
        sut(headElementHarness.dummySelector, anotherDummyElement)

        const elements = headElementHarness.getAll(
          headElementHarness.dummySelector,
        )
        expect(elements).toHaveSize(1)
        const element = elements[0]
        expect(element).toEqual(anotherDummyElement)
      })
    })

    const TEST_CASES = [null, undefined]
    for (const TEST_CASE of TEST_CASES) {
      describe(`when element is ${TEST_CASE}`, () => {
        it('should remove it', () => {
          sut(headElementHarness.dummySelector, TEST_CASE)

          expect(
            headElementHarness.getAll(headElementHarness.dummySelector),
          ).toHaveSize(0)
        })
      })
    }
  })
})

function makeSut() {
  TestBed.configureTestingModule({})
  return TestBed.inject(_headElementUpsertOrRemove())
}
