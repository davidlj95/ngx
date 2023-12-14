import { TestBed } from '@angular/core/testing'

import { MetadataSetter } from './metadata-setter'
import { makeMetadata } from './__tests__/make-metadata'
import { DefaultsService } from './defaults.service'
import { MockProviders } from 'ng-mocks'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { Metadata } from './metadata'
import { RouteMetadataValues } from './route-metadata-values'
import { MetadataDefinition } from './metadata-definition'
import { MetadataValues } from './metadata-values'

describe('MetadataSetter', () => {
  enableAutoSpy()
  let sut: MetadataSetter
  let dummyMetadata: Metadata<unknown>
  let valueFromValues: jasmine.SpyObj<MetadataValueFromValues>
  let routeMetadataValues: jasmine.SpyObj<RouteMetadataValues>
  let defaultsService: jasmine.SpyObj<DefaultsService>

  beforeEach(() => {
    dummyMetadata = makeMetadata()
    sut = makeSut()
    valueFromValues = TestBed.inject(
      MetadataValueFromValues,
    ) as jasmine.SpyObj<MetadataValueFromValues>
    routeMetadataValues = TestBed.inject(
      RouteMetadataValues,
    ) as jasmine.SpyObj<RouteMetadataValues>
    defaultsService = TestBed.inject(
      DefaultsService,
    ) as jasmine.SpyObj<DefaultsService>
  })

  describe('set', () => {
    const dummyValues = { foo: 'bar' }
    const value = 'value'
    const valueObject = {
      value: 'value',
      prop: 'value',
    }
    const defaultValue = 'defaultValue'
    const routeValues = { route: 'values' }

    describe('when value exists for the metadata', () => {
      beforeEach(() => {
        valueFromValues.get.and.returnValue(value)
      })

      it('should call setter with its value', () => {
        sut.set(dummyMetadata, dummyValues)

        expect(dummyMetadata.set).toHaveBeenCalledOnceWith(value)
        expect(valueFromValues.get).toHaveBeenCalledWith(
          dummyMetadata.definition,
          dummyValues,
        )
      })
    })

    describe('when route metadata values exist', () => {
      beforeEach(() => {
        routeMetadataValues.get.and.returnValue(routeValues)
        valueFromValues.get.and.callFake(
          <T>(def: MetadataDefinition, values: MetadataValues) => {
            if (values !== routeValues) {
              return undefined
            }
            return value as T
          },
        )
      })

      it('should call setter with value obtained from there', () => {
        sut.set(dummyMetadata, dummyValues)

        expect(dummyMetadata.set).toHaveBeenCalledOnceWith(value)
        expect(routeMetadataValues.get).toHaveBeenCalledOnceWith()
        expect(valueFromValues.get).toHaveBeenCalledWith(
          dummyMetadata.definition,
          routeValues,
        )
      })
    })

    describe('when default exists', () => {
      beforeEach(() => {
        defaultsService.get.and.returnValue(value)
      })

      it('should call setter with default value', () => {
        sut.set(dummyMetadata, dummyValues)

        expect(dummyMetadata.set).toHaveBeenCalledOnceWith(value)
        expect(defaultsService.get).toHaveBeenCalledOnceWith(
          dummyMetadata.definition,
        )
      })
    })

    describe('when value and default value exist', () => {
      beforeEach(() => {
        defaultsService.get.and.returnValue(defaultValue)
        valueFromValues.get.and.returnValue(value)
      })

      it('should call setter with value', () => {
        sut.set(dummyMetadata, dummyValues)

        expect(dummyMetadata.set).toHaveBeenCalledOnceWith(value)
      })
    })

    describe('when value and route value exist', () => {
      describe('when value is an object', () => {
        const routeValueObject = {
          routeValue: 'routeValue',
          prop: 'routeValue',
        }

        beforeEach(() => {
          routeMetadataValues.get.and.returnValue(routeValues)
          valueFromValues.get.and.callFake(
            <T>(def: MetadataDefinition, values: MetadataValues) => {
              switch (values) {
                case routeValues:
                  return routeValueObject as T
                case values:
                  return valueObject as T
                default:
                  throw new Error('Unexpected values, cannot mock')
              }
            },
          )
        })

        it('should merge the object, value having more priority', () => {
          sut.set(dummyMetadata, dummyValues)

          expect(dummyMetadata.set).toHaveBeenCalledOnceWith({
            ...routeValueObject,
            ...valueObject,
          })
        })
      })

      describe('when value is not an object', () => {
        const routeValue = 'routeValue'

        beforeEach(() => {
          routeMetadataValues.get.and.returnValue(routeValues)
          valueFromValues.get.and.callFake(
            <T>(def: MetadataDefinition, values: MetadataValues) => {
              switch (values) {
                case routeValues:
                  return routeValue as T
                case values:
                  return value as T
                default:
                  throw new Error('Unexpected values, cannot mock')
              }
            },
          )
        })

        it('should call setter with value', () => {
          sut.set(dummyMetadata, dummyValues)

          expect(dummyMetadata.set).toHaveBeenCalledOnceWith(value)
        })
      })
    })

    describe('when value is null and default exists', () => {
      beforeEach(() => {
        valueFromValues.get.and.returnValue(null)
        defaultsService.get.and.returnValue(defaultValue)
      })

      it('should call setter with null', () => {
        sut.set(dummyMetadata, dummyValues)

        expect(dummyMetadata.set).toHaveBeenCalledOnceWith(null)
      })
    })

    describe('when neither value or default value exists', () => {
      it('should call setter with undefined', () => {
        sut.set(dummyMetadata, dummyValues)

        expect(dummyMetadata.set).toHaveBeenCalledOnceWith(undefined)
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      MetadataSetter,
      MockProviders(
        MetadataValueFromValues,
        RouteMetadataValues,
        DefaultsService,
      ),
    ],
  })
  return TestBed.inject(MetadataSetter)
}
