import { MetadataRegistry } from './metadata-registry'
import { TestBed } from '@angular/core/testing'
import { makeMetadataProviderSpy } from './__tests__/make-metadata-provider-spy'
import { MetadataProvider } from './metadata-provider'
import { MockProvider } from 'ng-mocks'

describe('Metadata registry', () => {
  const dummyId = 'dummyId'
  const dummyMetadataProvider = makeMetadataProviderSpy({ id: dummyId })

  it('should register metadata from DI system', () => {
    const sut = makeSut({ metadataProviders: [dummyMetadataProvider] })

    const allMetadata = [...sut.getAll()]
    expect(allMetadata).toHaveSize(1)
    expect(allMetadata).toEqual([dummyMetadataProvider])
  })

  it('should register the given metadata', () => {
    const sut = makeSut()

    sut.register(dummyMetadataProvider)

    const allMetadata = [...sut.getAll()]
    expect(allMetadata).toHaveSize(1)
    expect(allMetadata).toEqual([dummyMetadataProvider])
  })

  it('should not register twice the same metadata', () => {
    const sameDummyMetadataProvider = makeMetadataProviderSpy({
      id: dummyId,
      spyName: 'duplicated metadata set',
    })
    const sut = makeSut()

    sut.register(dummyMetadataProvider)
    sut.register(sameDummyMetadataProvider)

    const allMetadata = [...sut.getAll()]
    expect(allMetadata).toHaveSize(1)
    expect(allMetadata).toEqual([dummyMetadataProvider])
  })
})

function makeSut(
  opts: {
    metadataProviders?: ReadonlyArray<MetadataProvider<unknown>>
  } = {},
) {
  TestBed.configureTestingModule({
    providers: [
      //👇 Mocking sut to ensure injected metadata calls registry function
      MetadataRegistry,
      ...(opts.metadataProviders
        ? opts.metadataProviders.map((metadata) =>
            MockProvider(MetadataProvider, metadata, 'useValue', true),
          )
        : []),
    ],
  })
  return TestBed.inject(MetadataRegistry)
}
