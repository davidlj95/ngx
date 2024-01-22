import { MetadataRegistry } from './metadata-registry'
import { TestBed } from '@angular/core/testing'
import { makeMetadataSpy } from './__tests__/make-metadata-spy'
import { MockProvider } from 'ng-mocks'
import { Metadata } from './metadata'

describe('Metadata registry', () => {
  const dummyMetadata = makeMetadataSpy()

  it('should register metadata from DI system', () => {
    const sut = makeSut({ metadata: [dummyMetadata] })

    const allMetadata = [...sut.getAll()]
    expect(allMetadata).toHaveSize(1)
    expect(allMetadata).toEqual([dummyMetadata])
  })

  it('should register the given metadata', () => {
    const sut = makeSut()

    sut.register(dummyMetadata)

    const allMetadata = [...sut.getAll()]
    expect(allMetadata).toHaveSize(1)
    expect(allMetadata).toEqual([dummyMetadata])
  })

  it('should not register twice the same metadata', () => {
    const sameDummyMetadata = makeMetadataSpy({ id: dummyMetadata.id })
    const sut = makeSut()

    sut.register(dummyMetadata)
    sut.register(sameDummyMetadata)

    const allMetadata = [...sut.getAll()]
    expect(allMetadata).toHaveSize(1)
    expect(allMetadata).toEqual([dummyMetadata])
  })
})

function makeSut(
  opts: {
    metadata?: ReadonlyArray<Metadata>
  } = {},
) {
  TestBed.configureTestingModule({
    providers: [
      MetadataRegistry,
      ...(opts.metadata ?? []).map((metadata) =>
        MockProvider(Metadata, metadata, 'useValue', true),
      ),
    ],
  })
  return TestBed.inject(MetadataRegistry)
}
