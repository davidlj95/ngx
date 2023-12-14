import { TestBed } from '@angular/core/testing'

import { JsonLdMetadata } from './json-ld-metadata'
import { JsonLdScriptHarness } from './__tests__/json-ld-script-harness'
import { DOCUMENT } from '@angular/common'

describe('JSON LD metadata', () => {
  let sut: JsonLdMetadata
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

        it('should remove it', () => {
          sut.set(jsonLd)

          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)
        })
      })

      describe('when JSON LD script element does not exist', () => {
        it('should not create it', () => {
          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)

          sut.set(jsonLd)

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

          sut.set(jsonLd)

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

          sut.set(jsonLd)

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
          sut.set(jsonLd)

          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)
        })
      })

      describe('when JSON LD script element exists', () => {
        beforeEach(() => {
          jsonLdScriptHarness.create({ foo: 'bar' })
        })

        it('should remove it', () => {
          sut.set(jsonLd)

          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)
        })
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({ providers: [JsonLdMetadata] })
  return TestBed.inject(JsonLdMetadata)
}
