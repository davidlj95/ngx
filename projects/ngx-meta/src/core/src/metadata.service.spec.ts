import { TestBed } from '@angular/core/testing'
import { MetadataService } from './metadata.service'
import { MockProvider, MockProviders } from 'ng-mocks'
import { makeMetadataProvider } from './__tests__/make-metadata-provider'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { METADATA_RESOLVER, MetadataResolverType } from './metadata-resolver'
import { RouteMetadataValues } from './route-metadata-values'
import { MetadataRegistry } from './metadata-registry'
import { MaybeUndefined } from './maybe-undefined'
import { Metadata } from './metadata'

describe('MetadataService', () => {
  enableAutoSpy()
  let sut: MetadataService
  let metadataRegistry: jasmine.SpyObj<MetadataRegistry>

  beforeEach(() => {
    sut = makeSut()
    metadataRegistry = TestBed.inject(
      MetadataRegistry,
    ) as jasmine.SpyObj<MetadataRegistry>
  })

  describe('set', () => {
    const firstMetadataProvider = makeMetadataProvider({ id: 'first' })
    const secondMetadataProvider = makeMetadataProvider({ id: 'second' })
    const dummyValues = {}

    beforeEach(() => {
      metadataRegistry.getAll.and.returnValue([
        firstMetadataProvider,
        secondMetadataProvider,
      ])
    })

    it('should set each metadata using resolved values', () => {
      const resolver = TestBed.inject(
        METADATA_RESOLVER,
      ) as unknown as jasmine.Spy<MetadataResolverType>
      const dummyFirstMetadataValue = 'firstMetadataValue'
      const dummySecondMetadataValue = 'secondMetadataValue'
      resolver.and.callFake(<T>(definition: Metadata) => {
        switch (definition) {
          case firstMetadataProvider.metadata:
            return dummyFirstMetadataValue as MaybeUndefined<T>
          case secondMetadataProvider.metadata:
            return dummySecondMetadataValue as MaybeUndefined<T>
          default:
            throw new Error('Unexpected metadata')
        }
      })
      sut.set(dummyValues)

      expect(metadataRegistry.getAll).toHaveBeenCalledOnceWith()
      expect(resolver).toHaveBeenCalledTimes(2)
      expect(resolver).toHaveBeenCalledWith(
        firstMetadataProvider.metadata,
        dummyValues,
      )
      expect(firstMetadataProvider.set).toHaveBeenCalledWith(
        dummyFirstMetadataValue,
      )
      expect(resolver).toHaveBeenCalledWith(
        secondMetadataProvider.metadata,
        dummyValues,
      )
      expect(secondMetadataProvider.set).toHaveBeenCalledWith(
        dummySecondMetadataValue,
      )
    })

    it('should set values for route when finished', () => {
      const routeMetadataValues = TestBed.inject(
        RouteMetadataValues,
      ) as jasmine.SpyObj<RouteMetadataValues>

      sut.set(dummyValues)

      expect(routeMetadataValues.set).toHaveBeenCalledOnceWith(dummyValues)
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      MetadataService,
      MockProviders(MetadataRegistry, RouteMetadataValues),
      MockProvider(METADATA_RESOLVER, jasmine.createSpy('Metadata resolver')),
    ],
  })
  return TestBed.inject(MetadataService)
}
