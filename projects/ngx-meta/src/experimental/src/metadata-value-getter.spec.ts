import { MetadataDefinition } from './metadata-definition'
import { TestBed } from '@angular/core/testing'
import { MetadataValueGetter } from './metadata-value-getter'

describe('MetadataValueGetter', () => {
  describe('get', () => {
    const scope = 'scope'
    const name = 'name'
    const value = 'value'

    describe('when value is undefined', () => {
      const metadataDefinition: MetadataDefinition = {
        scope,
        name,
      }

      const values = {
        [scope]: {},
      }

      it('should return undefined', () => {
        const sut = makeSut()

        expect(sut.get(metadataDefinition, values)).toBeUndefined()
      })
    })

    describe('when scope does not contain sub scopes', () => {
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

    describe('when scope contains sub scopes', () => {
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

    describe('when scope does not exist', () => {
      const metadataDefinition: MetadataDefinition = {
        scope,
        name,
      }

      const values = {}

      it('should return undefined', () => {
        const sut = makeSut()

        expect(sut.get(metadataDefinition, values)).toBeUndefined()
      })
    })

    describe('when scope is null', () => {
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
  })
})

function makeSut() {
  TestBed.configureTestingModule({ providers: [MetadataValueGetter] })
  return TestBed.inject(MetadataValueGetter)
}
