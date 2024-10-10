import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import {
  _isDefined,
  MetadataSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import { Standard } from '../types'
import { StandardThemeColorMetadataObject } from './standard-theme-color-metadata'

export const STANDARD_THEME_COLOR_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof KEY]
> = (metaElementsService: NgxMetaElementsService) => (value) => {
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
}

const KEY = 'themeColor' satisfies keyof Standard

/**
 * Manages the {@link Standard.themeColor} metadata
 * @public
 */
export const STANDARD_THEME_COLOR_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY, {
    s: STANDARD_THEME_COLOR_METADATA_SETTER_FACTORY,
  })
