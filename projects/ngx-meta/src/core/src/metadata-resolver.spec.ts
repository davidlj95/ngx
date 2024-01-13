import { TestBed } from '@angular/core/testing'

import { MetadataResolver } from './metadata-resolver'
import { DefaultsService } from './defaults.service'
import { MockProviders } from 'ng-mocks'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataJsonResolver } from './metadata-json-resolver'
import { RouteMetadataValues } from './route-metadata-values'
import { Metadata } from './metadata'
import { MetadataValues } from './metadata-values'
import { MaybeUndefined } from './maybe-undefined'
import { makeGlobalMetadata } from './make-global-metadata'

describe('MetadataResolver', () => {
  enableAutoSpy()
  let sut: MetadataResolver
  let dummyMetadataDefinition: Metadata
  let jsonResolver: jasmine.SpyObj<MetadataJsonResolver>
  let routeMetadataValues: jasmine.SpyObj<RouteMetadataValues>
  let defaultsService: jasmine.SpyObj<DefaultsService>

  beforeEach(() => {
    dummyMetadataDefinition = makeGlobalMetadata('dummy')
    sut = makeSut()
    jsonResolver = TestBed.inject(
      MetadataJsonResolver,
    ) as jasmine.SpyObj<MetadataJsonResolver>
    routeMetadataValues = TestBed.inject(
      RouteMetadataValues,
    ) as jasmine.SpyObj<RouteMetadataValues>
    defaultsService = TestBed.inject(
      DefaultsService,
    ) as jasmine.SpyObj<DefaultsService>
  })

  function mockJsonResolver(returnMap: Map<MetadataValues, unknown>) {
    jsonResolver.get.and.callFake(
      <T>(def: Metadata, values: MetadataValues) =>
        returnMap.get(values) as MaybeUndefined<T>,
    )
  }

  describe('get', () => {
    const dummyValues = { foo: 'bar' }
    const value = 'value'
    const valueObject = {
      value: 'value',
      prop: 'value',
    }
    const defaultValues = { default: 'values' }
    const routeValues = { route: 'values' }

    describe('when value exists in provided values', () => {
      beforeEach(() => {
        mockJsonResolver(new Map([[dummyValues, value]]))
      })

      it('should resolve value using values', () => {
        sut.get(dummyMetadataDefinition, dummyValues)

        expect(jsonResolver.get).toHaveBeenCalledWith(
          dummyMetadataDefinition,
          dummyValues,
        )
      })

      it('should return its value', () => {
        expect(sut.get(dummyMetadataDefinition, dummyValues)).toEqual(value)
      })
    })

    describe('when route metadata values exist', () => {
      beforeEach(() => {
        routeMetadataValues.get.and.returnValue(routeValues)
        mockJsonResolver(new Map([[routeValues, value]]))
      })

      it('should resolve value using route metadata values', () => {
        sut.get(dummyMetadataDefinition, dummyValues)

        expect(routeMetadataValues.get).toHaveBeenCalledOnceWith()
        expect(jsonResolver.get).toHaveBeenCalledWith(
          dummyMetadataDefinition,
          routeValues,
        )
      })

      it('should return value obtained from route metadata values', () => {
        expect(sut.get(dummyMetadataDefinition, dummyValues)).toEqual(value)
      })
    })

    describe('when defaults exist', () => {
      beforeEach(() => {
        defaultsService.get.and.returnValue(defaultValues)
        mockJsonResolver(new Map([[defaultValues, value]]))
      })

      it('should resolve value using default values', () => {
        sut.get(dummyMetadataDefinition, dummyValues)

        expect(defaultsService.get).toHaveBeenCalledOnceWith()
        expect(jsonResolver.get).toHaveBeenCalledWith(
          dummyMetadataDefinition,
          defaultValues,
        )
      })

      it('should return value obtained from defaults', () => {
        expect(sut.get(dummyMetadataDefinition, dummyValues)).toEqual(value)
      })
    })

    describe('when value exists in values object and route values', () => {
      describe('when value is an object', () => {
        const routeValueObject = {
          routeValue: 'routeValue',
          prop: 'routeValue',
        }

        beforeEach(() => {
          routeMetadataValues.get.and.returnValue(routeValues)
          mockJsonResolver(
            new Map<MetadataValues, unknown>([
              [routeValues, routeValueObject],
              [dummyValues, valueObject],
            ]),
          )
        })

        it('should return the merged object, with value props having more priority', () => {
          expect(sut.get(dummyMetadataDefinition, dummyValues)).toEqual({
            ...routeValueObject,
            ...valueObject,
          })
        })
      })

      describe('when value is not an object', () => {
        const routeValue = 'routeValue'

        beforeEach(() => {
          routeMetadataValues.get.and.returnValue(routeValues)
          jsonResolver.get.and.callFake(
            <T>(def: Metadata, values: MetadataValues) => {
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

        it('should return value from values object', () => {
          expect(sut.get(dummyMetadataDefinition, dummyValues)).toEqual(value)
        })
      })
    })

    describe('when neither value, route value or default value exists', () => {
      it('should return nothing', () => {
        expect(sut.get(dummyMetadataDefinition, dummyValues)).toBeUndefined()
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      MetadataResolver,
      MockProviders(MetadataJsonResolver, RouteMetadataValues, DefaultsService),
    ],
  })
  return TestBed.inject(MetadataResolver)
}
