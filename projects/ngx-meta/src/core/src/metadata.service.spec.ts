import { TestBed } from '@angular/core/testing'
import { MetadataService } from './metadata.service'
import { MockProvider, MockProviders } from 'ng-mocks'
import { makeMetadataProviderSpy } from './__tests__/make-metadata-provider-spy'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { METADATA_RESOLVER, MetadataResolver } from './metadata-resolver'
import { MetadataRegistry } from './metadata-registry'

describe('Metadata service', () => {
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
    const firstMetadataProvider = makeMetadataProviderSpy({ id: 'first' })
    const secondMetadataProvider = makeMetadataProviderSpy({ id: 'second' })
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
      ) as unknown as jasmine.Spy<MetadataResolver>
      const dummyFirstMetadataValue = 'firstMetadataValue'
      const dummySecondMetadataValue = 'secondMetadataValue'
      resolver.and.callFake((values, resolverOptions) => {
        switch (resolverOptions) {
          case firstMetadataProvider.resolverOptions:
            return dummyFirstMetadataValue
          case secondMetadataProvider.resolverOptions:
            return dummySecondMetadataValue
          default:
            throw new Error('Unexpected metadata')
        }
      })
      sut.set(dummyValues)

      expect(metadataRegistry.getAll).toHaveBeenCalledOnceWith()
      expect(resolver).toHaveBeenCalledTimes(2)
      expect(resolver).toHaveBeenCalledWith(
        dummyValues,
        firstMetadataProvider.resolverOptions,
      )
      expect(firstMetadataProvider.set).toHaveBeenCalledWith(
        dummyFirstMetadataValue,
      )
      expect(resolver).toHaveBeenCalledWith(
        dummyValues,
        secondMetadataProvider.resolverOptions,
      )
      expect(secondMetadataProvider.set).toHaveBeenCalledWith(
        dummySecondMetadataValue,
      )
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      MetadataService,
      MockProviders(MetadataRegistry),
      MockProvider(METADATA_RESOLVER, jasmine.createSpy('Metadata resolver')),
    ],
  })
  return TestBed.inject(MetadataService)
}
