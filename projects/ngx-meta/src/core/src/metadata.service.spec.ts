import { TestBed } from '@angular/core/testing'
import { MetadataService } from './metadata.service'
import { MockProviders } from 'ng-mocks'
import { makeMetadata } from './__tests__/make-metadata'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataSetter } from './metadata-setter'
import { RouteMetadataValues } from './route-metadata-values'
import { MetadataRegistry } from './metadata-registry'

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
    const firstMetadata = makeMetadata({ id: 'first' })
    const secondMetadata = makeMetadata({ id: 'second' })
    const dummyValues = {}

    beforeEach(() => {
      metadataRegistry.getAll.and.returnValue([firstMetadata, secondMetadata])
    })

    it('should set each metadata using the setter', () => {
      const metadataSetter = TestBed.inject(
        MetadataSetter,
      ) as unknown as jasmine.SpyObj<MetadataSetter>
      sut.set(dummyValues)

      expect(metadataSetter.set).toHaveBeenCalledTimes(2)
      expect(metadataSetter.set).toHaveBeenCalledWith(
        firstMetadata,
        dummyValues,
      )
      expect(metadataSetter.set).toHaveBeenCalledWith(
        secondMetadata,
        dummyValues,
      )
      expect(metadataRegistry.getAll).toHaveBeenCalledOnceWith()
    })

    it('should set values for current url when finished', () => {
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
      MockProviders(MetadataRegistry, MetadataSetter, RouteMetadataValues),
    ],
  })
  return TestBed.inject(MetadataService)
}
