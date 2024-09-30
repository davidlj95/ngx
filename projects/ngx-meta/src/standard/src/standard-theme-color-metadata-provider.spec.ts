import { MetadataSetter, NgxMetaMetaService } from '../../core'
import { Standard } from './standard'
import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { __STANDARD_THEME_COLOR_METADATA_SETTER_FACTORY } from './standard-theme-color-metadata-provider'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { MetaDefinition } from '@angular/platform-browser'
import { StandardThemeColorMetadataObject } from './standard-theme-color-metadata'

describe('Standard theme color metadata', () => {
  enableAutoSpy()
  let sut: MetadataSetter<Standard['themeColor']>
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
    sut(undefined)

    expect(metaService.set).toHaveBeenCalledOnceWith(
      jasmine.anything(),
      undefined,
    )
  })

  it('should call the meta service with the specified content when a string value is provided', () => {
    sut(DUMMY_COLOR)

    expect(metaService.set).toHaveBeenCalledOnceWith(
      jasmine.anything(),
      DUMMY_COLOR,
    )
  })

  it('should call the meta service with no value when an empty array is provided', () => {
    sut([])

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
    sut([firstMediaDefinition, secondMediaDefinition])

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

function makeSut(): MetadataSetter<Standard['themeColor']> {
  TestBed.configureTestingModule({
    providers: [MockProvider(NgxMetaMetaService)],
  })
  return __STANDARD_THEME_COLOR_METADATA_SETTER_FACTORY(
    TestBed.inject(NgxMetaMetaService),
  )
}
