import {
  NgxMetaMetadataManager,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { Standard } from '../types'
import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { STANDARD_THEME_COLOR_METADATA_PROVIDER } from './standard-theme-color-metadata-provider'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { MetaDefinition } from '@angular/platform-browser'
import { StandardThemeColorMetadataObject } from './standard-theme-color-metadata'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'

describe('Standard theme color metadata manager', () => {
  enableAutoSpy()
  let sut: NgxMetaMetadataManager<Standard['themeColor']>
  let metaService: jasmine.SpyObj<NgxMetaMetaService>

  const DUMMY_COLOR = 'black'
  const DUMMY_MEDIA = '(prefers-color-scheme: dark)'

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(
      NgxMetaMetaService,
    ) as jasmine.SpyObj<NgxMetaMetaService>
  })

  it('should call the meta service with no value when no value provided', () => {
    sut.set(undefined)

    expect(metaService.set).toHaveBeenCalledOnceWith(
      jasmine.anything(),
      undefined,
    )
  })

  it('should call the meta service with the specified content when a string value is provided', () => {
    sut.set(DUMMY_COLOR)

    expect(metaService.set).toHaveBeenCalledOnceWith(
      jasmine.anything(),
      DUMMY_COLOR,
    )
  })

  it('should call the meta service with no value when an empty array is provided', () => {
    sut.set([])

    expect(metaService.set).toHaveBeenCalledOnceWith(
      jasmine.anything(),
      undefined,
    )
  })

  it('should call the meta service with the specified content and media when object values are provided', () => {
    const firstMediaDefinition = {
      color: DUMMY_COLOR,
      media: DUMMY_MEDIA,
    } satisfies MetaDefinition & StandardThemeColorMetadataObject
    const secondMediaDefinition = {
      color: 'white',
    } satisfies MetaDefinition & StandardThemeColorMetadataObject
    sut.set([firstMediaDefinition, secondMediaDefinition])

    expect(metaService.set).toHaveBeenCalledWith(
      jasmine.anything(),
      firstMediaDefinition.color,
    )
    expect(metaService.set).toHaveBeenCalledWith(
      jasmine.anything(),
      secondMediaDefinition.color,
    )
    expect(
      metaService.set.calls
        .argsFor(0)[0]
        .withContent(firstMediaDefinition.color),
    ).toEqual({
      name: 'theme-color',
      content: firstMediaDefinition.color,
      media: firstMediaDefinition.media,
    })
    expect(
      metaService.set.calls
        .argsFor(1)[0]
        .withContent(secondMediaDefinition.color),
    ).toEqual({
      name: 'theme-color',
      content: secondMediaDefinition.color,
    })
  })
})

function makeSut(): NgxMetaMetadataManager<Standard['themeColor']> {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(NgxMetaMetaService),
      STANDARD_THEME_COLOR_METADATA_PROVIDER,
    ],
  })
  return injectOneMetadataManager()
}
