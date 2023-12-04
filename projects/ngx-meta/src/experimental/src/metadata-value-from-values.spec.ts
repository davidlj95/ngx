import { MetadataDefinition } from './metadata-definition'
import { TestBed } from '@angular/core/testing'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { MetadataValues } from './metadata-values'

describe('MetadataValueFromValues', () => {
  describe('get', () => {
    const scope = 'scope'
    const name = 'name'
    const value = 'value'

    function globalMayBeRetrieved(values: MetadataValues) {
      describe('when global is not defined', () => {
        const metadataDefinition: MetadataDefinition = {
          scope,
          name,
        }

        it('should return undefined', () => {
          const sut = makeSut()

          expect(sut.get(metadataDefinition, values)).toBeUndefined()
        })
      })

      describe('when global is defined', () => {
        const globalName = 'globalName'

        describe('but global value does not exist', () => {
          const metadataDefinition: MetadataDefinition = {
            scope,
            name,
            globalName,
          }

          it('should return undefined', () => {
            const sut = makeSut()

            expect(sut.get(metadataDefinition, values)).toBeUndefined()
          })
        })
        describe('and global value exists', () => {
          const metadataDefinition: MetadataDefinition = {
            scope,
            name,
            globalName,
          }

          const valuesWithGlobal = { [globalName]: value, ...values }

          it('should return global value', () => {
            const sut = makeSut()

            expect(sut.get(metadataDefinition, valuesWithGlobal)).toEqual(value)
          })
        })
      })
    }

    describe('when specific value is not set', () => {
      describe('like when scope does not exist', () => {
        const values = {}

        globalMayBeRetrieved(values)
      })

      describe('like when scope is defined but property name does not exist', () => {
        const values = {
          [scope]: {},
        }
        globalMayBeRetrieved(values)
      })

      describe('like when scope is null', () => {
        const metadataDefinition: MetadataDefinition = {
          scope,
          name,
        }

        const values = { [scope]: null }

        it('should return null', () => {
          const sut = makeSut()

          expect(sut.get(metadataDefinition, values)).toBeNull()
        })
      })

      describe('like when scope value is null and there is sub scope', () => {
        const metadataDefinition: MetadataDefinition = {
          scope: `${scope}.subScope`,
          name,
        }

        const values = { [scope]: null }

        it('should return null', () => {
          const sut = makeSut()

          expect(sut.get(metadataDefinition, values)).toBeNull()
        })
      })

      describe('like when scope is not an object', () => {
        const values = {
          [scope]: 42,
        }
        globalMayBeRetrieved(values)
      })
    })

    describe('when specific value is defined', () => {
      describe('like when scope does not contain sub scopes', () => {
        const metadataDefinition: MetadataDefinition = {
          scope,
          name,
        }

        const values = {
          [scope]: {
            [name]: value,
          },
        }

        it('should return value using scope and name as keys', () => {
          const sut = makeSut()

          expect(sut.get(metadataDefinition, values)).toEqual(value)
        })
      })

      describe('like when scope contains sub scopes', () => {
        const subScope = 'subScope'
        const metadataDefinition: MetadataDefinition = {
          scope: `${scope}.${subScope}`,
          name,
        }

        const values = {
          [scope]: {
            [subScope]: {
              [name]: value,
            },
          },
        }

        it('should return value using sub scope, scope and name as keys', () => {
          const sut = makeSut()

          expect(sut.get(metadataDefinition, values)).toEqual(value)
        })
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({ providers: [MetadataValueFromValues] })
  return TestBed.inject(MetadataValueFromValues)
}
