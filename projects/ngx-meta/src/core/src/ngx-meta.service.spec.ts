import { TestBed } from '@angular/core/testing'
import { NgxMetaService } from './ngx-meta.service'
import { MockProvider, MockProviders } from 'ng-mocks'
import { makeMetadataSpy } from './__tests__/make-metadata-spy'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { METADATA_RESOLVER, MetadataResolver } from './metadata-resolver'
import { MetadataRegistry } from './metadata-registry'

describe('NgxMeta service', () => {
  enableAutoSpy()
  let sut: NgxMetaService
  let metadataRegistry: jasmine.SpyObj<MetadataRegistry>

  beforeEach(() => {
    sut = makeSut()
    metadataRegistry = TestBed.inject(
      MetadataRegistry,
    ) as jasmine.SpyObj<MetadataRegistry>
  })

  describe('set', () => {
    const firstMetadata = makeMetadataSpy({ id: 'first' })
    const secondMetadata = makeMetadataSpy({ id: 'second' })
    const dummyValues = {}

    beforeEach(() => {
      metadataRegistry.getAll.and.returnValue([firstMetadata, secondMetadata])
    })

    it('should set each metadata using resolved values', () => {
      const resolver = TestBed.inject(
        METADATA_RESOLVER,
      ) as unknown as jasmine.Spy<MetadataResolver>
      const dummyFirstMetadataValue = 'firstMetadataValue'
      const dummySecondMetadataValue = 'secondMetadataValue'
      resolver.and.callFake((values, resolverOptions) => {
        switch (resolverOptions) {
          case firstMetadata.resolverOptions:
            return dummyFirstMetadataValue
          case secondMetadata.resolverOptions:
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
        firstMetadata.resolverOptions,
      )
      expect(firstMetadata.set).toHaveBeenCalledWith(dummyFirstMetadataValue)
      expect(resolver).toHaveBeenCalledWith(
        dummyValues,
        secondMetadata.resolverOptions,
      )
      expect(secondMetadata.set).toHaveBeenCalledWith(dummySecondMetadataValue)
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      NgxMetaService,
      MockProviders(MetadataRegistry),
      MockProvider(METADATA_RESOLVER, jasmine.createSpy('Metadata resolver')),
    ],
  })
  return TestBed.inject(NgxMetaService)
}
