import { MetadataRegistry } from './metadata-registry'
import { TestBed } from '@angular/core/testing'
import { makeMetadataSetterSpy } from './__tests__/make-metadata-setter-spy'
import { MockProvider } from 'ng-mocks'
import { NgxMetaMetadataSetter } from './ngx-meta-metadata-setter'

describe('Metadata registry', () => {
  const dummySetter = makeMetadataSetterSpy()

  it('should register metadata setters from DI system', () => {
    const sut = makeSut({ setters: [dummySetter] })

    const setters = [...sut.getAll()]
    expect(setters).toHaveSize(1)
    expect(setters).toEqual([dummySetter])
  })

  it('should register the given metadata setter', () => {
    const sut = makeSut()

    sut.register(dummySetter)

    const setters = [...sut.getAll()]
    expect(setters).toHaveSize(1)
    expect(setters).toEqual([dummySetter])
  })

  it('should not register twice the same metadata', () => {
    const sameDummySetter = makeMetadataSetterSpy({
      id: dummySetter.id,
    })
    const sut = makeSut()

    sut.register(dummySetter)
    sut.register(sameDummySetter)

    const setters = [...sut.getAll()]
    expect(setters).toHaveSize(1)
    expect(setters).toEqual([dummySetter])
  })
})

function makeSut(
  opts: {
    setters?: ReadonlyArray<NgxMetaMetadataSetter>
  } = {},
) {
  TestBed.configureTestingModule({
    providers: [
      MetadataRegistry,
      ...(opts.setters ?? []).map((setter) =>
        MockProvider(NgxMetaMetadataSetter, setter, 'useValue', true),
      ),
    ],
  })
  return TestBed.inject(MetadataRegistry)
}
