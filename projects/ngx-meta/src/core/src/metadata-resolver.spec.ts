import { TestBed } from '@angular/core/testing'

import { MockProvider, MockProviders } from 'ng-mocks'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataJsonResolver } from './metadata-json-resolver'
import { RouteMetadataValues } from './route-metadata-values'
import { Metadata } from './metadata'
import { MetadataValues } from './metadata-values'
import { MaybeUndefined } from './maybe-undefined'
import { Provider } from '@angular/core'
import { DEFAULTS_TOKEN } from './defaults-token'
import { makeMetadata } from './make-metadata'
import {
  METADATA_RESOLVER,
  METADATA_RESOLVER_PROVIDER,
  MetadataResolver,
} from './metadata-resolver'

describe('Metadata resolver', () => {
  enableAutoSpy()

  describe('get', () => {
    const dummyMetadata = makeMetadata(['dummy'])
    const dummyValues = { foo: 'bar' }
    const value = 'value'
    const valueObject = {
      value: 'value',
      prop: 'value',
    }
    const routeValues = { route: 'values' }
    let jsonResolver: jasmine.SpyObj<MetadataJsonResolver>
    let routeMetadataValues: jasmine.SpyObj<RouteMetadataValues>
    let sut: MetadataResolver

    function mockJsonResolver(returnMap: Map<MetadataValues, unknown>) {
      jsonResolver.get.and.callFake(
        <T>(metadata: Metadata, values: MetadataValues) =>
          returnMap.get(values) as MaybeUndefined<T>,
      )
    }
    function injectSpies() {
      jsonResolver = TestBed.inject(
        MetadataJsonResolver,
      ) as jasmine.SpyObj<MetadataJsonResolver>
      routeMetadataValues = TestBed.inject(
        RouteMetadataValues,
      ) as jasmine.SpyObj<RouteMetadataValues>
    }

    describe('when value exists in provided values', () => {
      beforeEach(() => {
        sut = makeSut()
        injectSpies()
        mockJsonResolver(new Map([[dummyValues, value]]))
      })

      it('should resolve value using values', () => {
        sut(dummyMetadata, dummyValues)

        expect(jsonResolver.get).toHaveBeenCalledWith(
          dummyMetadata,
          dummyValues,
        )
      })

      it('should return its value', () => {
        expect(sut(dummyMetadata, dummyValues)).toEqual(value)
      })
    })

    describe('when route metadata values exist', () => {
      beforeEach(() => {
        sut = makeSut()
        injectSpies()
        routeMetadataValues.get.and.returnValue(routeValues)
        mockJsonResolver(new Map([[routeValues, value]]))
      })

      it('should resolve value using route metadata values', () => {
        sut(dummyMetadata, dummyValues)

        expect(routeMetadataValues.get).toHaveBeenCalledOnceWith()
        expect(jsonResolver.get).toHaveBeenCalledWith(
          dummyMetadata,
          routeValues,
        )
      })

      it('should return value obtained from route metadata values', () => {
        expect(sut(dummyMetadata, dummyValues)).toEqual(value)
      })
    })

    describe('when defaults exist', () => {
      const defaults = { default: 'values' }
      beforeEach(() => {
        sut = makeSut({ defaults })
        injectSpies()
        mockJsonResolver(new Map([[defaults, value]]))
      })

      it('should resolve value using default values', () => {
        sut(dummyMetadata, dummyValues)

        expect(jsonResolver.get).toHaveBeenCalledWith(dummyMetadata, defaults)
      })

      it('should return value obtained from defaults', () => {
        expect(sut(dummyMetadata, dummyValues)).toEqual(value)
      })
    })

    describe('when value exists in values object and route values', () => {
      describe('when value is an object', () => {
        const routeValueObject = {
          routeValue: 'routeValue',
          prop: 'routeValue',
        }

        beforeEach(() => {
          sut = makeSut()
          injectSpies()
          routeMetadataValues.get.and.returnValue(routeValues)
          mockJsonResolver(
            new Map<MetadataValues, unknown>([
              [routeValues, routeValueObject],
              [dummyValues, valueObject],
            ]),
          )
        })

        it('should return the merged object, with value props having more priority', () => {
          expect(sut(dummyMetadata, dummyValues)).toEqual({
            ...routeValueObject,
            ...valueObject,
          })
        })
      })

      describe('when value is not an object', () => {
        const routeValue = 'routeValue'

        beforeEach(() => {
          sut = makeSut()
          injectSpies()
          routeMetadataValues.get.and.returnValue(routeValues)
          mockJsonResolver(
            new Map<MetadataValues, unknown>([
              [routeValues, routeValue],
              [dummyValues, value],
            ]),
          )
        })

        it('should return value from values object', () => {
          expect(sut(dummyMetadata, dummyValues)).toEqual(value)
        })
      })
    })

    describe('when neither value, route value or default value exists', () => {
      beforeEach(() => {
        sut = makeSut()
        injectSpies()
      })
      it('should return nothing', () => {
        expect(sut(dummyMetadata, dummyValues)).toBeUndefined()
      })
    })
  })
})

function makeSut(opts: { defaults?: MetadataValues } = {}): MetadataResolver {
  const providers: Provider[] = [
    METADATA_RESOLVER_PROVIDER,
    MockProviders(MetadataJsonResolver, RouteMetadataValues),
  ]
  if (opts.defaults) {
    providers.push(MockProvider(DEFAULTS_TOKEN, opts.defaults))
  }
  TestBed.configureTestingModule({
    providers,
  })
  return TestBed.inject(METADATA_RESOLVER)
}
