import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import {
  _isDefined,
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import { StandardThemeColorMetadataObject } from './standard-theme-color-metadata'

/**
 * Manages the {@link Standard.themeColor} metadata
 * @public
 */
export const STANDARD_THEME_COLOR_METADATA_PROVIDER =
  makeStandardMetadataProvider('themeColor', {
    s: (metaElementsService: NgxMetaElementsService) => (value) => {
      const contents = !_isDefined(value)
        ? []
        : typeof value === 'string'
          ? [{ color: value } satisfies StandardThemeColorMetadataObject]
          : value
      metaElementsService.set(
        withNameAttribute('theme-color'),
        contents.map(({ color, media }) =>
          withContentAttribute(color, media ? { media } : undefined),
        ),
      )
    },
  })
