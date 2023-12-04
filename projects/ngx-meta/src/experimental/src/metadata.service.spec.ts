import { TestBed } from '@angular/core/testing'
import { MetadataService } from './metadata.service'
import { Metadata } from './metadata'
import { MockProvider, MockProviders } from 'ng-mocks'
import { makeMetadata } from './__tests__/make-metadata'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataSetter } from './metadata-setter'
import { RouteMetadataValues } from './route-metadata-values'

describe('MetadataService', () => {
  enableAutoSpy()

  describe('set', () => {
    const dummyValues = {}

    it('should set each metadata using the setter', () => {
      const firstMetadata = makeMetadata({ name: 'first' })
      const secondMetadata = makeMetadata({ name: 'second' })
      const sut = makeSut({ properties: [firstMetadata, secondMetadata] })
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
    })

    it('should set values for current url when finished', () => {
      const sut = makeSut()
      const routeMetadataValues = TestBed.inject(
        RouteMetadataValues,
      ) as jasmine.SpyObj<RouteMetadataValues>

      sut.set(dummyValues)

      expect(routeMetadataValues.set).toHaveBeenCalledOnceWith(dummyValues)
    })
  })
})

function makeSut(opts: { properties?: ReadonlyArray<Metadata<unknown>> } = {}) {
  const metadataProviders =
    opts.properties?.map((metadata) =>
      MockProvider(Metadata, metadata, 'useValue', true),
    ) ?? []
  TestBed.configureTestingModule({
    providers: [
      MetadataService,
      ...metadataProviders,
      MockProviders(MetadataSetter, RouteMetadataValues),
    ],
  })
  return TestBed.inject(MetadataService)
}
