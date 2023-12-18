import { TestBed } from '@angular/core/testing'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { MetadataValues } from './metadata-values'
import { MetadataDefinition } from './metadata-definition'
import { makeScopedMetadataDefinition } from './__tests__/make-scoped-metadata-definition'
import { makeGlobalMetadataDefinition } from './__tests__/make-global-metadata-definition'

describe('MetadataValueFromValues', () => {
  let sut: MetadataValueFromValues

  beforeEach(() => {
    sut = makeSut()
  })

  describe('get', () => {
    const scope = 'scope'
    const global = 'global'
    const name = 'name'
    const value = 'value'

    function testGlobalMayBeRetrieved(
      metadataDefinition: MetadataDefinition,
      values: MetadataValues,
    ) {
      describe('when global is not defined', () => {
        it('should return undefined', () => {
          expect(sut.get(metadataDefinition, values)).toBeUndefined()
        })
      })

      describe('when global is defined', () => {
        const metadataDefinitionWithGlobal = makeScopedMetadataDefinition({
          ...metadataDefinition,
          global,
        })

        describe('but global value does not exist', () => {
          it('should return undefined', () => {
            expect(
              sut.get(metadataDefinitionWithGlobal, values),
            ).toBeUndefined()
          })
        })
        describe('and global value exists', () => {
          const valuesWithGlobal = { [global]: value, ...values }

          it('should return global value', () => {
            expect(
              sut.get(metadataDefinitionWithGlobal, valuesWithGlobal),
            ).toEqual(value)
          })
        })
      })
    }

    describe('when specific value is not set', () => {
      describe('like when values are undefined', () => {
        const values = undefined

        it('should return undefined', () => {
          expect(
            sut.get(makeGlobalMetadataDefinition(), values),
          ).toBeUndefined()
        })
      })
      describe('like when scope does not exist', () => {
        const metadataDefinition = makeScopedMetadataDefinition({
          scope,
        })
        const values = {}

        testGlobalMayBeRetrieved(metadataDefinition, values)
      })

      describe('like when scope is defined but property name does not exist', () => {
        const metadataDefinition = makeScopedMetadataDefinition({
          scope,
          name,
        })
        const values = {
          [scope]: {},
        }
        testGlobalMayBeRetrieved(metadataDefinition, values)
      })

      describe('like when scope is null', () => {
        const metadataDefinition = makeScopedMetadataDefinition({
          scope,
        })

        const values = { [scope]: null }

        it('should return null', () => {
          expect(sut.get(metadataDefinition, values)).toBeNull()
        })
      })

      describe('like when scope value is null and there is sub scope', () => {
        const metadataDefinition = makeScopedMetadataDefinition({
          scope: `${scope}.subScope`,
          name,
        })

        const values = { [scope]: null }

        it('should return null', () => {
          expect(sut.get(metadataDefinition, values)).toBeNull()
        })
      })

      describe('like when scope is not an object', () => {
        const metadataDefinition = makeScopedMetadataDefinition({ scope })
        const values = {
          [scope]: 42,
        }
        testGlobalMayBeRetrieved(metadataDefinition, values)
      })
    })

    describe('when specific value is defined', () => {
      describe('like when scope does not contain sub scopes', () => {
        const metadataDefinition = makeScopedMetadataDefinition({
          scope,
          name,
        })

        const values = {
          [scope]: {
            [name]: value,
          },
        }

        it('should return value using scope and name as keys', () => {
          expect(sut.get(metadataDefinition, values)).toEqual(value)
        })
      })

      describe('like when scope contains sub scopes', () => {
        const subScope = 'subScope'
        const metadataDefinition = makeScopedMetadataDefinition({
          scope: `${scope}.${subScope}`,
          name,
        })

        const values = {
          [scope]: {
            [subScope]: {
              [name]: value,
            },
          },
        }

        it('should return value using sub scope, scope and name as keys', () => {
          expect(sut.get(metadataDefinition, values)).toEqual(value)
        })
      })
      describe('and it is and object, and a global object exists too', () => {
        const valueObject = { value: 'value', prop: 'value' }
        const globalValueObject = {
          globalValue: 'globalValue',
          prop: 'globalValue',
        }
        const metadataDefinition = makeScopedMetadataDefinition({
          scope,
          name,
          global,
        })

        const values = {
          [global]: globalValueObject,
          [scope]: {
            [name]: valueObject,
          },
        }

        it('should merge both objects, with specific value taking priority', () => {
          expect(sut.get(metadataDefinition, values)).toEqual({
            ...globalValueObject,
            ...valueObject,
          })
        })
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({ providers: [MetadataValueFromValues] })
  return TestBed.inject(MetadataValueFromValues)
}
