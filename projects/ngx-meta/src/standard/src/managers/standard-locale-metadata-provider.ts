import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import {
  _GLOBAL_LOCALE,
  _isDefined,
  MetadataSetterFactory,
} from '@davidlj95/ngx-meta/core'
import { DOCUMENT } from '@angular/common'
import { Standard } from '../types'

export const STANDARD_LOCALE_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof _GLOBAL_LOCALE]
> = (doc: Document) => (locale) => {
  const htmlElement = doc.documentElement
  if (!_isDefined(locale)) {
    htmlElement.removeAttribute(ATTRIBUTE_NAME)
    return
  }
  htmlElement.setAttribute(ATTRIBUTE_NAME, locale)
}

const ATTRIBUTE_NAME = 'lang'

/**
 * Manages the {@link Standard.locale} metadata
 * @public
 */
export const STANDARD_LOCALE_METADATA_PROVIDER = makeStandardMetadataProvider(
  _GLOBAL_LOCALE,
  {
    g: _GLOBAL_LOCALE,
    s: STANDARD_LOCALE_METADATA_SETTER_FACTORY,
    d: [DOCUMENT],
  },
)
