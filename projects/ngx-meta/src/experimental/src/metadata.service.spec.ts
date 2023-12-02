import { TestBed } from '@angular/core/testing'
import { MetadataService } from './metadata.service'
import { Metadata } from './metadata'
import { MockProvider } from 'ng-mocks'
import { makeMetadata } from './__tests__/make-metadata'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataSetter } from './metadata-setter'

describe('MetadataService', () => {
  enableAutoSpy()

  describe('set', () => {
    it('should set each metadata using the setter', () => {
      const dummyValues = {}
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
      MockProvider(MetadataSetter),
    ],
  })
  return TestBed.inject(MetadataService)
}
