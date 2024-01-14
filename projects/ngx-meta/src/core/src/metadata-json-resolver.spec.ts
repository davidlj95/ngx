import { TestBed } from '@angular/core/testing'
import { MetadataJsonResolver } from './metadata-json-resolver'
import { MetadataValues } from './metadata-values'
import { Metadata } from './metadata'
import { makeMetadata } from './make-metadata'
import { makeGlobalMetadata } from './make-global-metadata'

describe('MetadataJsonResolver', () => {
  let sut: MetadataJsonResolver

  beforeEach(() => {
    sut = makeSut()
  })

  describe('get', () => {
    const key = 'key'
    const subKey = 'subKey'
    const global = 'global'
    const value = 'value'

    function testGlobalMayBeRetrieved(
      metadata: Metadata,
      values: MetadataValues,
    ) {
      describe('when global is not defined', () => {
        it('should return undefined', () => {
          expect(sut.get(metadata, values)).toBeUndefined()
        })
      })

      describe('when global is defined', () => {
        const metadataWithGlobal = makeMetadata(metadata.jsonPath, global)

        describe('but global value does not exist', () => {
          it('should return undefined', () => {
            expect(sut.get(metadataWithGlobal, values)).toBeUndefined()
          })
        })
        describe('and global value exists', () => {
          const valuesWithGlobal = { [global]: value, ...values }

          it('should return global value', () => {
            expect(sut.get(metadataWithGlobal, valuesWithGlobal)).toEqual(value)
          })
        })
      })
    }

    describe('when specific value is not set', () => {
      describe('like when values are undefined', () => {
        const values = undefined

        it('should return undefined', () => {
          expect(sut.get(makeGlobalMetadata('dummy'), values)).toBeUndefined()
        })
      })
      describe('like when key does not exist', () => {
        const metadata = makeMetadata([key, subKey])
        const values = {}

        testGlobalMayBeRetrieved(metadata, values)
      })

      describe('like when key is defined but sub key does not exist', () => {
        const metadata = makeMetadata([key, subKey])
        const values = {
          [key]: {},
        }
        testGlobalMayBeRetrieved(metadata, values)
      })

      describe('like when key is null', () => {
        const metadata = makeMetadata([key, subKey])
        const values = { [key]: null }

        it('should return null', () => {
          expect(sut.get(metadata, values)).toBeNull()
        })
      })

      describe('like when value in key is not an object', () => {
        const metadata = makeMetadata([key, subKey])
        const values = {
          [key]: 42,
        }
        testGlobalMayBeRetrieved(metadata, values)
      })
    })

    describe('when specific value is defined', () => {
      describe('like when there is a key and sub key', () => {
        const metadata = makeMetadata([key, subKey])

        const values = {
          [key]: {
            [subKey]: value,
          },
        }

        it('should return value using key and sub key as path', () => {
          expect(sut.get(metadata, values)).toEqual(value)
        })
      })

      describe('and it is and object, and a global object exists too', () => {
        const valueObject = { value: 'value', prop: 'value' }
        const globalValueObject = {
          globalValue: 'globalValue',
          prop: 'globalValue',
        }
        const metadata = makeMetadata([key, subKey], global)
        const values = {
          [global]: globalValueObject,
          [key]: {
            [subKey]: valueObject,
          },
        }

        it('should merge both objects, with specific value taking priority', () => {
          expect(sut.get(metadata, values)).toEqual({
            ...globalValueObject,
            ...valueObject,
          })
        })
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({ providers: [MetadataJsonResolver] })
  return TestBed.inject(MetadataJsonResolver)
}
