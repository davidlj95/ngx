import {
  _GLOBAL_LOCALE,
  _isDefined,
  _withModuleManagerSetterFactory,
  _withSameNameGlobal,
  withManagerDeps,
} from '@davidlj95/ngx-meta/core'
import { DOCUMENT } from '@angular/common'
import { provideStandardManager } from '../utils/provide-standard-manager'

const ATTRIBUTE_NAME = 'lang'

/**
 * Manages the {@link Standard.locale} metadata
 * @public
 */
export const STANDARD_LOCALE_METADATA_PROVIDER = provideStandardManager(
  _GLOBAL_LOCALE,
  _withSameNameGlobal(),
  withManagerDeps(DOCUMENT),
  _withModuleManagerSetterFactory((doc: Document) => (locale) => {
    const htmlElement = doc.documentElement
    if (!_isDefined(locale)) {
      htmlElement.removeAttribute(ATTRIBUTE_NAME)
      return
    }
    htmlElement.setAttribute(ATTRIBUTE_NAME, locale)
  }),
)
