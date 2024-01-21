import { TestBed } from '@angular/core/testing'
import {
  METADATA_JSON_RESOLVER,
  MetadataJsonResolver,
} from './metadata-json-resolver'
import { MetadataValues } from './metadata-values'
import {
  makeMetadataResolverOptions,
  MetadataResolverOptions,
} from './metadata-provider'

describe('Metadata JSON Resolver', () => {
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
      values: MetadataValues,
      resolverOptions: MetadataResolverOptions,
    ) {
      describe('when global is not defined', () => {
        it('should return undefined', () => {
          expect(sut(values, resolverOptions)).toBeUndefined()
        })
      })

      describe('when global is defined', () => {
        const resolverOptionsWithGlobal: MetadataResolverOptions = {
          ...resolverOptions,
          global,
        }

        describe('but global value does not exist', () => {
          it('should return undefined', () => {
            expect(sut(values, resolverOptionsWithGlobal)).toBeUndefined()
          })
        })
        describe('and global value exists', () => {
          const valuesWithGlobal = { [global]: value, ...values }

          it('should return global value', () => {
            expect(sut(valuesWithGlobal, resolverOptionsWithGlobal)).toEqual(
              value,
            )
          })
        })
      })
    }

    describe('when specific value is not set', () => {
      describe('like when values are undefined', () => {
        const values = undefined

        it('should return undefined', () => {
          expect(
            sut(values, makeMetadataResolverOptions(['dummy'])),
          ).toBeUndefined()
        })
      })
      describe('like when key does not exist', () => {
        const values = {}
        const resolverOptions = makeMetadataResolverOptions([key, subKey])

        testGlobalMayBeRetrieved(values, resolverOptions)
      })

      describe('like when key is defined but sub key does not exist', () => {
        const values = {
          [key]: {},
        }
        const resolverOptions = makeMetadataResolverOptions([key, subKey])

        testGlobalMayBeRetrieved(values, resolverOptions)
      })

      describe('like when key is null', () => {
        const values = { [key]: null }
        const resolverOptions = makeMetadataResolverOptions([key, subKey])

        it('should return null', () => {
          expect(sut(values, resolverOptions)).toBeNull()
        })
      })

      describe('like when value in key is not an object', () => {
        const values = {
          [key]: 42,
        }
        const resolverOptions = makeMetadataResolverOptions([key, subKey])

        testGlobalMayBeRetrieved(values, resolverOptions)
      })
    })

    describe('when specific value is defined', () => {
      describe('like when there is a key and sub key', () => {
        const values = {
          [key]: {
            [subKey]: value,
          },
        }
        const resolverOptions = makeMetadataResolverOptions([key, subKey])

        it('should return value using key and sub key as path', () => {
          expect(sut(values, resolverOptions)).toEqual(value)
        })
      })

      describe('and it is and object, and a global object exists too', () => {
        const valueObject = { value: 'value', prop: 'value' }
        const globalValueObject = {
          globalValue: 'globalValue',
          prop: 'globalValue',
        }
        const resolverOptions = makeMetadataResolverOptions(
          [key, subKey],
          global,
        )
        const values = {
          [global]: globalValueObject,
          [key]: {
            [subKey]: valueObject,
          },
        }

        it('should merge both objects, with specific value taking priority', () => {
          expect(sut(values, resolverOptions)).toEqual({
            ...globalValueObject,
            ...valueObject,
          })
        })
      })
    })
  })
})

function makeSut(): MetadataJsonResolver {
  TestBed.configureTestingModule({})
  return TestBed.inject(METADATA_JSON_RESOLVER)
}
