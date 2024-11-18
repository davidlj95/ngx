import {
  _isDefined,
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import { StandardThemeColorMetadataObject } from './standard-theme-color-metadata'
import { provideStandardManager } from '../utils/provide-standard-manager'
import { Standard } from '../types'

/**
 * Manages the {@link Standard.themeColor} metadata
 * @public
 */
export const STANDARD_THEME_COLOR_METADATA_PROVIDER = provideStandardManager(
  'themeColor',
  _withModuleManagerSetterFactory(
    (metaElementsService: NgxMetaElementsService) => (value) => {
      const contents = !_isDefined(value)
        ? []
        : (Array.isArray as IsStandardThemeColorMetadataArray)(value)
          ? value
          : [{ color: value } satisfies StandardThemeColorMetadataObject]
      metaElementsService.set(
        withNameAttribute('theme-color'),
        contents.map(({ color, media }) =>
          withContentAttribute(color, media ? { media } : undefined),
        ),
      )
    },
  ),
)

type IsStandardThemeColorMetadataArray = (
  value: Standard['themeColor'],
) => value is readonly StandardThemeColorMetadataObject[]
