import {
  NgxMetaElementNameAttribute,
  NgxMetaElementsService,
  NgxMetaMetadataManager,
} from '@davidlj95/ngx-meta/core'
import { Standard } from '../types'
import { TestBed } from '@angular/core/testing'
import { MockProvider } from 'ng-mocks'
import { provideStandardThemeColor } from './provide-standard-theme-color'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { MetaDefinition } from '@angular/platform-browser'
import { StandardThemeColorMetadataObject } from './standard-theme-color-metadata'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'

describe('Standard theme color metadata manager', () => {
  enableAutoSpy()
  let sut: NgxMetaMetadataManager<Standard['themeColor']>
  let metaElementsService: jasmine.SpyObj<NgxMetaElementsService>

  const DUMMY_COLOR = 'black'
  const DUMMY_MEDIA = '(prefers-color-scheme: dark)'
  const EXPECTED_NAME_ATTRIBUTE = [
    'name',
    'theme-color',
  ] satisfies NgxMetaElementNameAttribute

  beforeEach(() => {
    sut = makeSut()
    metaElementsService = TestBed.inject(
      NgxMetaElementsService,
    ) as jasmine.SpyObj<NgxMetaElementsService>
  })

  it('should call the meta service with no value when no value provided', () => {
    sut.set(undefined)

    expect(metaElementsService.set).toHaveBeenCalledOnceWith(
      EXPECTED_NAME_ATTRIBUTE,
      [],
    )
  })

  it('should call the meta service with the specified content when a string value is provided', () => {
    sut.set(DUMMY_COLOR)

    expect(metaElementsService.set).toHaveBeenCalledOnceWith(
      EXPECTED_NAME_ATTRIBUTE,
      [{ content: DUMMY_COLOR }],
    )
  })

  it('should call the meta service with no value when an empty array is provided', () => {
    sut.set([])

    expect(metaElementsService.set).toHaveBeenCalledOnceWith(
      EXPECTED_NAME_ATTRIBUTE,
      [],
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

    expect(metaElementsService.set).toHaveBeenCalledWith(
      EXPECTED_NAME_ATTRIBUTE,
      [
        {
          content: firstMediaDefinition.color,
          media: firstMediaDefinition.media,
        },
        { content: secondMediaDefinition.color },
      ],
    )
  })
})

function makeSut(): NgxMetaMetadataManager<Standard['themeColor']> {
  TestBed.configureTestingModule({
    providers: [
      MockProvider(NgxMetaElementsService),
      provideStandardThemeColor(),
    ],
  })
  return injectOneMetadataManager()
}
