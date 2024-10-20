import { TestBed } from '@angular/core/testing'

import { HeadElementHarness } from './__tests__/head-element-harness'
import { DOCUMENT } from '@angular/common'
import {
  _headElementUpsertOrRemove,
  _HeadElementUpsertOrRemove,
} from './head-element-upsert-or-remove'
import { likeWhenNullOrUndefined } from '@/ngx-meta/test/like-when-null-or-undefined'

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
    headElementHarness.removeAllDummyElements()
  })

  describe('when element does not exist already', () => {
    describe('when element is defined', () => {
      it('should append it to head', () => {
        sut(headElementHarness.dummySelector, dummyElement)

        const elements = headElementHarness.getAllDummyElements()

        expect(elements).toHaveSize(1)
        const element = elements[0]

        expect(element).toEqual(dummyElement)
      })
    })

    describe('when element is not defined', () => {
      likeWhenNullOrUndefined((testCase) => {
        it('should do nothing', () => {
          sut(headElementHarness.dummySelector, testCase)

          expect(headElementHarness.getAllDummyElements()).toHaveSize(0)
        })
      })
    })
  })

  describe('when element exists already', () => {
    beforeEach(() => {
      headElementHarness.appendElement(dummyElement)
    })

    // eslint-disable-next-line jasmine/no-suite-dupes
    describe('when element is defined', () => {
      it('should update it', () => {
        const anotherDummyElement =
          headElementHarness.createDummyElement('dummy 2')
        sut(headElementHarness.dummySelector, anotherDummyElement)

        const elements = headElementHarness.getAllDummyElements()

        expect(elements).toHaveSize(1)
        const element = elements[0]

        expect(element).toEqual(anotherDummyElement)
      })
    })

    // eslint-disable-next-line jasmine/no-suite-dupes
    describe('when element is not defined', () => {
      likeWhenNullOrUndefined((testCase) => {
        it('should remove it', () => {
          sut(headElementHarness.dummySelector, testCase)

          expect(headElementHarness.getAllDummyElements()).toHaveSize(0)
        })
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({})
  return TestBed.inject(_headElementUpsertOrRemove())
}
