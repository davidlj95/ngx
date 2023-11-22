import { TestBed } from '@angular/core/testing'

import { JsonLdService } from './json-ld.service'
import { JsonLdScriptHarness } from './__tests__/json-ld-script-harness'
import { DOCUMENT } from '@angular/common'

describe('JsonLdService', () => {
  let sut: JsonLdService
  let jsonLdScriptHarness: JsonLdScriptHarness

  beforeEach(() => {
    sut = makeSut()
    jsonLdScriptHarness = new JsonLdScriptHarness(TestBed.inject(DOCUMENT))
  })

  afterEach(() => {
    jsonLdScriptHarness.remove()
  })

  describe('set', () => {
    describe('when JSON LD not provided', () => {
      const jsonLd = undefined

      describe('when JSON LD script element exists', () => {
        const existingJsonLd = { foo: 'bar' }

        beforeEach(() => {
          jsonLdScriptHarness.create(existingJsonLd)
        })

        it('should not create nor update existing element', () => {
          expect(jsonLdScriptHarness.getAll()).toHaveSize(1)

          sut.apply(jsonLd)

          const jsonLdScriptElements = jsonLdScriptHarness.getAll()
          expect(jsonLdScriptElements).toHaveSize(1)
          expect(
            jsonLdScriptHarness.getJsonLdFromElement(jsonLdScriptElements[0]),
          ).toEqual(existingJsonLd)
        })
      })

      describe('when JSON LD script element does not exist', () => {
        it('should not create it', () => {
          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)

          sut.apply(jsonLd)

          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)
        })
      })
    })

    describe('when JSON LD is provided', () => {
      const jsonLd = { foo: 'bar' }

      describe('when JSON LD script element exists', () => {
        const existingJsonLd = { existing: 'JSON LD' }

        beforeEach(() => {
          jsonLdScriptHarness.create(existingJsonLd)
        })

        it('should update it', () => {
          expect(jsonLdScriptHarness.getAll()).toHaveSize(1)

          sut.apply(jsonLd)

          const jsonLdScriptElements = jsonLdScriptHarness.getAll()
          expect(jsonLdScriptElements).toHaveSize(1)
          expect(
            jsonLdScriptHarness.getJsonLdFromElement(jsonLdScriptElements[0]),
          ).toEqual(jsonLd)
        })
      })

      describe('when JSON LD script element does not exist', () => {
        it('should create it', () => {
          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)

          sut.apply(jsonLd)

          const jsonLdScriptElements = jsonLdScriptHarness.getAll()
          expect(jsonLdScriptElements).toHaveSize(1)
          expect(
            jsonLdScriptHarness.getJsonLdFromElement(jsonLdScriptElements[0]),
          ).toEqual(jsonLd)
        })
      })
    })

    describe('when JSON LD is null', () => {
      const jsonLd = null

      describe('when JSON LD script element does not exist', () => {
        it('should do nothing', () => {
          sut.apply(jsonLd)

          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)
        })
      })

      describe('when JSON LD script element exists', () => {
        beforeEach(() => {
          jsonLdScriptHarness.create({ foo: 'bar' })
        })

        it('should remove it', () => {
          sut.apply(jsonLd)

          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)
        })
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({ providers: [JsonLdService] })
  return TestBed.inject(JsonLdService)
}
