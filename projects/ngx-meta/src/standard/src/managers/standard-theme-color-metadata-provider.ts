import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import {
  MetadataSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { Standard } from '../types'
import { makeStandardMetaDefinition } from '../utils/make-standard-meta-definition'
import { StandardThemeColorMetadataObject } from './standard-theme-color-metadata'

export const STANDARD_THEME_COLOR_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof KEY]
> = (ngxMetaMetaService: NgxMetaMetaService) => (value) => {
  const isValueAnArray = (Array.isArray as isStandardThemeColorArray)(value)
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

const KEY = 'themeColor' satisfies keyof Standard
const META_NAME = 'theme-color'

type isStandardThemeColorArray = (
  value: Standard['themeColor'],
) => value is ReadonlyArray<StandardThemeColorMetadataObject>

/**
 * Manages the {@link Standard.themeColor} metadata
 * @public
 */
export const STANDARD_THEME_COLOR_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY, {
    s: STANDARD_THEME_COLOR_METADATA_SETTER_FACTORY,
  })
