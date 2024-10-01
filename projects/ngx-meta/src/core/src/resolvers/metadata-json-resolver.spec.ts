import { TestBed } from '@angular/core/testing'
import {
  METADATA_JSON_RESOLVER,
  MetadataJsonResolver,
} from './metadata-json-resolver'
import { MetadataValues } from '../service'
import { MetadataResolverOptions } from '../managers'

describe('Metadata JSON resolver', () => {
  let sut: MetadataJsonResolver

  beforeEach(() => {
    sut = makeSut()
  })

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
        expect(sut(values, { jsonPath: ['dummy'] })).toBeUndefined()
      })
    })
    describe('like when key does not exist', () => {
      const values = {}
      const resolverOptions = { jsonPath: [key, subKey] }

      testGlobalMayBeRetrieved(values, resolverOptions)
    })

    describe('like when key is defined but sub key does not exist', () => {
      const values = {
        [key]: {},
      }
      const resolverOptions = { jsonPath: [key, subKey] }

      testGlobalMayBeRetrieved(values, resolverOptions)
    })

    describe('like when key is null', () => {
      const values = { [key]: null }
      const resolverOptions = { jsonPath: [key, subKey] }

      it('should return null', () => {
        expect(sut(values, resolverOptions)).toBeNull()
      })
    })

    describe('like when value in key is not an object', () => {
      const values = {
        [key]: 42,
      }
      const resolverOptions = { jsonPath: [key, subKey] }

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
      const resolverOptions = { jsonPath: [key, subKey] }

      it('should return value using key and sub key as path', () => {
        expect(sut(values, resolverOptions)).toEqual(value)
      })
    })

    describe('and a global exists too', () => {
      describe('when object merging is disabled', () => {
        const values = {
          [global]: global,
          [key]: {
            [subKey]: value,
          },
        }
        const resolverOptions = { jsonPath: [key, subKey], global }

        it('should return specific value', () => {
          expect(sut(values, resolverOptions)).toEqual(value)
        })
      })

      describe('when object merging is enabled', () => {
        const resolverOptions = {
          jsonPath: [key, subKey],
          global,
          objectMerge: true,
        }

        describe('when values are not objects', () => {
          const values = {
            [global]: global,
            [key]: {
              [subKey]: value,
            },
          }

          it('should return specific value', () => {
            expect(sut(values, resolverOptions)).toEqual(value)
          })
        })

        describe('when values are objects', () => {
          const GLOBAL_OBJECT = { shared: 'shared', global }
          const VALUE_OBJECT = { shared: 'overridden', value }
          const values = {
            [global]: GLOBAL_OBJECT,
            [key]: {
              [subKey]: VALUE_OBJECT,
            },
          }

          it('should return merged objects', () => {
            expect(sut(values, resolverOptions)).toEqual({
              ...GLOBAL_OBJECT,
              ...VALUE_OBJECT,
            })
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
