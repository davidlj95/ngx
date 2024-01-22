import { TestBed } from '@angular/core/testing'

import { MockProvider, MockProviders } from 'ng-mocks'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { _NgxMetaRouteValuesService } from './ngx-meta-route-values.service'
import { MetadataValues } from './metadata-values'
import { Provider } from '@angular/core'
import { DEFAULTS_TOKEN } from './defaults-token'
import {
  METADATA_RESOLVER,
  METADATA_RESOLVER_PROVIDER,
  MetadataResolver,
} from './metadata-resolver'
import {
  METADATA_JSON_RESOLVER,
  MetadataJsonResolver,
} from './metadata-json-resolver'
import { _makeMetadataResolverOptions } from './ngx-meta-metadata'

describe('Metadata resolver', () => {
  enableAutoSpy()

  describe('get', () => {
    const dummyResolverOptions = _makeMetadataResolverOptions(['dummy'])
    const dummyValues = { foo: 'bar' }
    const value = 'value'
    const valueObject = {
      value: 'value',
      prop: 'value',
    }
    const routeValues = { route: 'values' }
    let jsonResolver: jasmine.Spy<MetadataJsonResolver>
    let routeMetadataValues: jasmine.SpyObj<_NgxMetaRouteValuesService>
    let sut: MetadataResolver

    function mockJsonResolver(returnMap: Map<MetadataValues, unknown>) {
      jsonResolver.and.callFake((values) =>
        returnMap.get(values as MetadataValues),
      )
    }
    function injectSpies() {
      jsonResolver = TestBed.inject(
        METADATA_JSON_RESOLVER,
      ) as jasmine.Spy<MetadataJsonResolver>
      routeMetadataValues = TestBed.inject(
        _NgxMetaRouteValuesService,
      ) as jasmine.SpyObj<_NgxMetaRouteValuesService>
    }

    describe('when value exists in provided values', () => {
      beforeEach(() => {
        sut = makeSut()
        injectSpies()
        mockJsonResolver(new Map([[dummyValues, value]]))
      })

      it('should resolve value using values', () => {
        sut(dummyValues, dummyResolverOptions)

        expect(jsonResolver).toHaveBeenCalledWith(
          dummyValues,
          dummyResolverOptions,
        )
      })

      it('should return its value', () => {
        expect(sut(dummyValues, dummyResolverOptions)).toEqual(value)
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
        sut(dummyValues, dummyResolverOptions)

        expect(routeMetadataValues.get).toHaveBeenCalledOnceWith()
        expect(jsonResolver).toHaveBeenCalledWith(
          routeValues,
          dummyResolverOptions,
        )
      })

      it('should return value obtained from route metadata values', () => {
        expect(sut(dummyValues, dummyResolverOptions)).toEqual(value)
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
        sut(dummyValues, dummyResolverOptions)

        expect(jsonResolver).toHaveBeenCalledWith(
          defaults,
          dummyResolverOptions,
        )
      })

      it('should return value obtained from defaults', () => {
        expect(sut(dummyValues, dummyResolverOptions)).toEqual(value)
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
          expect(sut(dummyValues, dummyResolverOptions)).toEqual({
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
          expect(sut(dummyValues, dummyResolverOptions)).toEqual(value)
        })
      })
    })

    describe('when neither value, route value or default value exists', () => {
      beforeEach(() => {
        sut = makeSut()
        injectSpies()
      })
      it('should return nothing', () => {
        expect(sut(dummyValues, dummyResolverOptions)).toBeUndefined()
      })
    })
  })
})

function makeSut(opts: { defaults?: MetadataValues } = {}): MetadataResolver {
  const providers: Provider[] = [
    METADATA_RESOLVER_PROVIDER,
    MockProviders(_NgxMetaRouteValuesService),
    MockProvider(
      METADATA_JSON_RESOLVER,
      jasmine.createSpy('Metadata JSON resolver'),
    ),
  ]
  if (opts.defaults) {
    providers.push(MockProvider(DEFAULTS_TOKEN, opts.defaults))
  }
  TestBed.configureTestingModule({
    providers,
  })
  return TestBed.inject(METADATA_RESOLVER)
}
