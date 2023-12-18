import { MetadataRegistry } from './metadata-registry'
import { TestBed } from '@angular/core/testing'
import { makeMetadata } from './__tests__/make-metadata'
import { Metadata } from './metadata'
import { MockProvider } from 'ng-mocks'

describe('MetadataRegistry', () => {
  const dummyId = 'dummyId'
  const dummyMetadata = makeMetadata({ id: dummyId })

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
    const sameDummyMetadata = makeMetadata({
      id: dummyId,
      spyName: 'duplicated metadata set',
    })
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
    metadata?: ReadonlyArray<Metadata<unknown>>
  } = {},
) {
  TestBed.configureTestingModule({
    providers: [
      //👇 Mocking sut to ensure injected metadata calls registry function
      MetadataRegistry,
      ...(opts.metadata
        ? opts.metadata.map((metadata) =>
            MockProvider(Metadata, metadata, 'useValue', true),
          )
        : []),
    ],
  })
  return TestBed.inject(MetadataRegistry)
}
