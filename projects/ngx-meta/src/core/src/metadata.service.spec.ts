import { TestBed } from '@angular/core/testing'
import { MetadataService } from './metadata.service'
import { MockProviders } from 'ng-mocks'
import { makeMetadataProvider } from './__tests__/make-metadata-provider'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataResolver } from './metadata-resolver'
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
    const firstMetadata = makeMetadataProvider({ id: 'first' })
    const secondMetadata = makeMetadataProvider({ id: 'second' })
    const dummyValues = {}

    beforeEach(() => {
      metadataRegistry.getAll.and.returnValue([firstMetadata, secondMetadata])
    })

    it('should set each metadata using resolved values', () => {
      const resolver = TestBed.inject(
        MetadataResolver,
      ) as unknown as jasmine.SpyObj<MetadataResolver>
      const dummyFirstMetadataValue = 'firstMetadataValue'
      const dummySecondMetadataValue = 'secondMetadataValue'
      resolver.get.and.callFake(<T>(definition: Metadata) => {
        switch (definition) {
          case firstMetadata.metadata:
            return dummyFirstMetadataValue as MaybeUndefined<T>
          case secondMetadata.metadata:
            return dummySecondMetadataValue as MaybeUndefined<T>
          default:
            throw new Error('Unexpected metadata')
        }
      })
      sut.set(dummyValues)

      expect(metadataRegistry.getAll).toHaveBeenCalledOnceWith()
      expect(resolver.get).toHaveBeenCalledTimes(2)
      expect(resolver.get).toHaveBeenCalledWith(
        firstMetadata.metadata,
        dummyValues,
      )
      expect(firstMetadata.set).toHaveBeenCalledWith(dummyFirstMetadataValue)
      expect(resolver.get).toHaveBeenCalledWith(
        secondMetadata.metadata,
        dummyValues,
      )
      expect(secondMetadata.set).toHaveBeenCalledWith(dummySecondMetadataValue)
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
      MockProviders(MetadataRegistry, MetadataResolver, RouteMetadataValues),
    ],
  })
  return TestBed.inject(MetadataService)
}
