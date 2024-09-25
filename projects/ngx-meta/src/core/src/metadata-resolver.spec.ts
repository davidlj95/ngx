import { TestBed } from '@angular/core/testing'

import { MockProvider, MockProviders } from 'ng-mocks'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { _RouteValuesService } from './route-values.service'
import { MetadataValues } from './metadata-values'
import { Provider } from '@angular/core'
import { DEFAULTS } from './defaults'
import {
  METADATA_RESOLVER,
  METADATA_RESOLVER_PROVIDER,
  MetadataResolver,
} from './metadata-resolver'
import {
  METADATA_JSON_RESOLVER,
  MetadataJsonResolver,
} from './metadata-json-resolver'
import {
  _makeMetadataResolverOptions,
  MetadataResolverOptions,
} from './ngx-meta-metadata-manager'

describe('Metadata resolver', () => {
  enableAutoSpy()

  const baseResolverOptions = _makeMetadataResolverOptions(['dummy'])
  const DUMMY_VALUES = { foo: 'bar' }
  const VALUE = 'value'
  const DUMMY_ROUTE_VALUES = { route: 'values' }
  let jsonResolver: jasmine.Spy<MetadataJsonResolver>
  let routeMetadataValues: jasmine.SpyObj<_RouteValuesService>
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
      _RouteValuesService,
    ) as jasmine.SpyObj<_RouteValuesService>
  }

  describe('when value exists in provided values', () => {
    beforeEach(() => {
      sut = makeSut()
      injectSpies()
      mockJsonResolver(new Map([[DUMMY_VALUES, VALUE]]))
    })

    it('should resolve value using values', () => {
      sut(DUMMY_VALUES, baseResolverOptions)

      expect(jsonResolver).toHaveBeenCalledWith(
        DUMMY_VALUES,
        baseResolverOptions,
      )
    })

    it('should return its value', () => {
      expect(sut(DUMMY_VALUES, baseResolverOptions)).toEqual(VALUE)
    })
  })

  describe('when route metadata values exist', () => {
    beforeEach(() => {
      sut = makeSut()
      injectSpies()
      routeMetadataValues.get.and.returnValue(DUMMY_ROUTE_VALUES)
      mockJsonResolver(new Map([[DUMMY_ROUTE_VALUES, VALUE]]))
    })

    it('should resolve value using route metadata values', () => {
      sut(DUMMY_VALUES, baseResolverOptions)

      expect(routeMetadataValues.get).toHaveBeenCalledOnceWith()
      expect(jsonResolver).toHaveBeenCalledWith(
        DUMMY_ROUTE_VALUES,
        baseResolverOptions,
      )
    })

    it('should return value obtained from route metadata values', () => {
      expect(sut(DUMMY_VALUES, baseResolverOptions)).toEqual(VALUE)
    })
  })

  describe('when defaults exist', () => {
    const defaults = { default: 'values' }
    beforeEach(() => {
      sut = makeSut({ defaults })
      injectSpies()
      mockJsonResolver(new Map([[defaults, VALUE]]))
    })

    it('should resolve value using default values', () => {
      sut(DUMMY_VALUES, baseResolverOptions)

      expect(jsonResolver).toHaveBeenCalledWith(defaults, baseResolverOptions)
    })

    it('should return value obtained from defaults', () => {
      expect(sut(DUMMY_VALUES, baseResolverOptions)).toEqual(VALUE)
    })
  })

  describe('when value exists in values object and route values', () => {
    describe('when object merging is disabled', () => {
      const routeValue = 'routeValue'

      beforeEach(() => {
        sut = makeSut()
        injectSpies()
        routeMetadataValues.get.and.returnValue(DUMMY_ROUTE_VALUES)
        mockJsonResolver(
          new Map<MetadataValues, unknown>([
            [DUMMY_ROUTE_VALUES, routeValue],
            [DUMMY_VALUES, VALUE],
          ]),
        )
      })

      it('should return value from values object', () => {
        expect(sut(DUMMY_VALUES, baseResolverOptions)).toEqual(VALUE)
      })
    })

    describe('when object merging is enabled', () => {
      const resolverOptions: MetadataResolverOptions = {
        ...baseResolverOptions,
        objectMerge: true,
      }

      describe('when values are not objects', () => {
        const ROUTE_VALUE = 'routeValue'

        beforeEach(() => {
          sut = makeSut()
          injectSpies()
          routeMetadataValues.get.and.returnValue(DUMMY_ROUTE_VALUES)
          mockJsonResolver(
            new Map<MetadataValues, unknown>([
              [DUMMY_ROUTE_VALUES, ROUTE_VALUE],
              [DUMMY_VALUES, VALUE],
            ]),
          )
        })

        it('should return value from values object', () => {
          expect(sut(DUMMY_VALUES, resolverOptions)).toEqual(VALUE)
        })
      })

      describe('when values are objects', () => {
        const ROUTE_VALUE_OBJ = { shared: 'shared', route: 'route' }
        const VALUE_OBJ = { shared: 'overridden', value: 'value' }

        beforeEach(() => {
          sut = makeSut()
          injectSpies()
          routeMetadataValues.get.and.returnValue(DUMMY_ROUTE_VALUES)
          mockJsonResolver(
            new Map<MetadataValues, unknown>([
              [DUMMY_ROUTE_VALUES, ROUTE_VALUE_OBJ],
              [DUMMY_VALUES, VALUE_OBJ],
            ]),
          )
        })

        it('should return merged value objects', () => {
          expect(sut(DUMMY_VALUES, resolverOptions)).toEqual({
            ...ROUTE_VALUE_OBJ,
            ...VALUE_OBJ,
          })
        })
      })
    })
  })

  describe('when neither value, route value or default value exists', () => {
    it('should return nothing', () => {
      const sut = makeSut()
      expect(sut(DUMMY_VALUES, baseResolverOptions)).toBeUndefined()
    })
  })
})

function makeSut(opts: { defaults?: MetadataValues } = {}): MetadataResolver {
  const providers: Provider[] = [
    METADATA_RESOLVER_PROVIDER,
    MockProviders(_RouteValuesService),
    MockProvider(
      METADATA_JSON_RESOLVER,
      jasmine.createSpy('Metadata JSON resolver'),
    ),
  ]
  if (opts.defaults) {
    providers.push(MockProvider(DEFAULTS, opts.defaults))
  }
  TestBed.configureTestingModule({
    providers,
  })
  return TestBed.inject(METADATA_RESOLVER)
}
