import { TestBed } from '@angular/core/testing'

import { JsonLdScriptHarness } from './__tests__/json-ld-script-harness'
import { DOCUMENT } from '@angular/common'
import { GlobalMetadata, MetadataSetter } from '../../core'
import { JSON_LD_METADATA_SETTER_FACTORY } from './json-ld-metadata-provider'

describe('JSON LD metadata provider', () => {
  let sut: MetadataSetter<GlobalMetadata['jsonLd']>
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
          sut(jsonLd)

          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)
        })
      })

      describe('when JSON LD script element does not exist', () => {
        it('should not create it', () => {
          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)

          sut(jsonLd)

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

          sut(jsonLd)

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

          sut(jsonLd)

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
          sut(jsonLd)

          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)
        })
      })

      describe('when JSON LD script element exists', () => {
        beforeEach(() => {
          jsonLdScriptHarness.create({ foo: 'bar' })
        })

        it('should remove it', () => {
          sut(jsonLd)

          expect(jsonLdScriptHarness.getAll()).toHaveSize(0)
        })
      })
    })
  })
})

function makeSut(): MetadataSetter<GlobalMetadata['jsonLd']> {
  TestBed.configureTestingModule({})
  return JSON_LD_METADATA_SETTER_FACTORY(TestBed.inject(DOCUMENT))
}
