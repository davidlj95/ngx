import { TestBed } from '@angular/core/testing'
import { NgxMetaService } from './ngx-meta.service'
import { MockProvider } from 'ng-mocks'
import { makeMetadataManagerSpy } from '../managers/__tests__/make-metadata-manager-spy'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import {
  metadataResolver,
  MetadataResolver,
} from '../resolvers/metadata-resolver'
import {
  metadataRegistry as metadataRegistryToken,
  MetadataRegistry,
} from '../managers/metadata-registry'

describe('Main service', () => {
  enableAutoSpy()
  let sut: NgxMetaService
  let metadataRegistry: jasmine.SpyObj<MetadataRegistry>
  const firstMetadata = makeMetadataManagerSpy({ id: 'first' })
  const secondMetadata = makeMetadataManagerSpy({ id: 'second' })

  beforeEach(() => {
    sut = makeSut()
    metadataRegistry = TestBed.inject(
      metadataRegistryToken(),
    ) as jasmine.SpyObj<MetadataRegistry>
    metadataRegistry.getAll.and.returnValue([firstMetadata, secondMetadata])
  })

  describe('set', () => {
    const dummyValues = {}

    it('should set each metadata using resolved values', () => {
      const resolver = TestBed.inject(
        metadataResolver(),
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

  describe('clear', () => {
    it('should set each metadata to undefined so they get removed from page', () => {
      sut.clear()

      expect(firstMetadata.set).toHaveBeenCalledWith(undefined)
      expect(secondMetadata.set).toHaveBeenCalledWith(undefined)
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(
        metadataRegistryToken(),
        // eslint-disable-next-line jasmine/no-unsafe-spy
        jasmine.createSpyObj<MetadataRegistry>(['getAll']),
      ),
      // eslint-disable-next-line jasmine/no-unsafe-spy
      MockProvider(metadataResolver(), jasmine.createSpy('Metadata resolver')),
    ],
  })
  return TestBed.inject(NgxMetaService)
}
