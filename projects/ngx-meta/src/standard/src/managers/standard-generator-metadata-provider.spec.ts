import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { MetadataSetter, NgxMetaMetaService } from '@davidlj95/ngx-meta/core'
import { VERSION } from '@angular/core'
import { Standard } from '../types'
import { STANDARD_GENERATOR_METADATA_SETTER_FACTORY } from './standard-generator-metadata-provider'

describe('Standard generator metadata', () => {
  enableAutoSpy()
  let sut: MetadataSetter<Standard['generator']>
  let metaService: jasmine.SpyObj<NgxMetaMetaService>

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(
      NgxMetaMetaService,
    ) as jasmine.SpyObj<NgxMetaMetaService>
  })

  it('when not provided should call meta service with nothing value', () => {
    sut(undefined)

    expect(metaService.set).toHaveBeenCalledOnceWith(
      jasmine.anything(),
      undefined,
    )
  })
  it('when null should call meta service with null value', () => {
    sut(null)

    expect(metaService.set).toHaveBeenCalledOnceWith(jasmine.anything(), null)
  })
  it('when true should call meta service with Angular version as value', () => {
    sut(true)

    expect(metaService.set).toHaveBeenCalledOnceWith(
      jasmine.anything(),
      `Angular v${VERSION.full}`,
    )
  })
})

function makeSut(): MetadataSetter<Standard['generator']> {
  TestBed.configureTestingModule({
    providers: [MockProvider(NgxMetaMetaService)],
  })
  return STANDARD_GENERATOR_METADATA_SETTER_FACTORY(
    TestBed.inject(NgxMetaMetaService),
  )
}
