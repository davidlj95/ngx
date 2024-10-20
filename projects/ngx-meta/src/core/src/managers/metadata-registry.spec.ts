import { metadataRegistry } from './metadata-registry'
import { TestBed } from '@angular/core/testing'
import { makeMetadataManagerSpy } from './__tests__/make-metadata-manager-spy'
import { MockProvider } from 'ng-mocks'
import { NgxMetaMetadataManager } from './ngx-meta-metadata-manager'

describe('Metadata registry', () => {
  const dummyManager = makeMetadataManagerSpy()

  it('should register metadata managers from DI system', () => {
    const sut = makeSut({ managers: [dummyManager] })

    const managers = [...sut.getAll()]

    expect(managers).toHaveSize(1)
    expect(managers).toEqual([dummyManager])
  })

  it('should register the given metadata manager', () => {
    const sut = makeSut()

    sut.register(dummyManager)

    const managers = [...sut.getAll()]

    expect(managers).toHaveSize(1)
    expect(managers).toEqual([dummyManager])
  })

  it('should not register twice the same metadata', () => {
    const sameDummyManager = makeMetadataManagerSpy({
      id: dummyManager.id,
    })
    const sut = makeSut()

    sut.register(dummyManager)
    sut.register(sameDummyManager)

    const managers = [...sut.getAll()]

    expect(managers).toHaveSize(1)
    expect(managers).toEqual([dummyManager])
  })

  it('should find metadata managers by global', () => {
    const global = 'global'
    const globalDummyManager = makeMetadataManagerSpy({
      global,
    })
    const sut = makeSut()

    sut.register(dummyManager)
    sut.register(globalDummyManager)

    const managers = [...sut.findByGlobalOrJsonPath(global)]

    expect(managers).toHaveSize(1)
    expect(managers).toEqual([globalDummyManager])
  })

  it('should find metadata managers by json path', () => {
    const jsonPath = ['dummy', 'json', 'path']
    const jsonPathManager = makeMetadataManagerSpy({
      jsonPath,
    })
    const sut = makeSut()

    sut.register(dummyManager)
    sut.register(jsonPathManager)

    const managers = [...sut.findByGlobalOrJsonPath(jsonPath.join('.'))]

    expect(managers).toHaveSize(1)
    expect(managers).toEqual([jsonPathManager])
  })
})

function makeSut(
  opts: {
    managers?: ReadonlyArray<NgxMetaMetadataManager>
  } = {},
) {
  TestBed.configureTestingModule({
    providers: [
      ...(opts.managers ?? []).map((manager) =>
        MockProvider(NgxMetaMetadataManager, manager, 'useValue', true),
      ),
    ],
  })
  return TestBed.inject(metadataRegistry())
}
