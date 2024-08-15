import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import {
  MetadataSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { Standard } from './standard'
import { makeStandardMetaDefinition } from './make-standard-meta-definition'
import { StandardThemeColorMetadataObject } from './standard-theme-color-metadata'

/**
 * @internal
 */
export const _STANDARD_THEME_COLOR_KEY = 'themeColor' satisfies keyof Standard

const META_NAME = 'theme-color'

/**
 * @internal
 */
export const __STANDARD_THEME_COLOR_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof _STANDARD_THEME_COLOR_KEY]
> = (ngxMetaMetaService: NgxMetaMetaService) => (value) => {
  const isValueAnArray = isStandardThemeColorArray(value)
  const baseMetaDefinition = makeStandardMetaDefinition(META_NAME)
  if (!value || !isValueAnArray || !value.length) {
    ngxMetaMetaService.set(
      baseMetaDefinition,
      isValueAnArray ? undefined : value,
    )
    return
  }
  for (const { media, color } of value) {
    ngxMetaMetaService.set(
      makeStandardMetaDefinition(META_NAME, media ? { extras: { media } } : {}),
      color,
    )
  }
}

const isStandardThemeColorArray = (
  value: Standard['themeColor'],
): value is ReadonlyArray<StandardThemeColorMetadataObject> =>
  Array.isArray(value)

/**
 * Manages the {@link Standard.themeColor} metadata
 * @public
 */
export const STANDARD_THEME_COLOR_METADATA_PROVIDER =
  makeStandardMetadataProvider(_STANDARD_THEME_COLOR_KEY, {
    s: __STANDARD_THEME_COLOR_METADATA_SETTER_FACTORY,
  })