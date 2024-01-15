import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { GLOBAL_LOCALE, MetadataSetterFactory } from '@davidlj95/ngx-meta/core'
import { DOCUMENT } from '@angular/common'
import { Standard } from './standard'

const ATTRIBUTE_NAME = 'lang'
export const STANDARD_LOCALE_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof GLOBAL_LOCALE]
> = (doc: Document) => (locale) => {
  const htmlElement = doc.documentElement
  if (locale === null || locale === undefined) {
    htmlElement.removeAttribute(ATTRIBUTE_NAME)
    return
  }
  htmlElement.setAttribute(ATTRIBUTE_NAME, locale)
}

export const STANDARD_LOCALE_METADATA_PROVIDER = makeStandardMetadataProvider(
  GLOBAL_LOCALE,
  {
    g: GLOBAL_LOCALE,
    s: STANDARD_LOCALE_METADATA_SETTER_FACTORY,
    d: [DOCUMENT],
  },
)
