import {
  _GLOBAL_LOCALE,
  _isDefined,
  _withModuleManagerSameGlobalKey,
  _withModuleManagerSetterFactory,
  withManagerDeps,
} from '@davidlj95/ngx-meta/core'
import { DOCUMENT } from '@angular/common'
import { provideStandardManager } from '../utils/provide-standard-manager'

const ATTRIBUTE_NAME = 'lang'

/**
 * Manages the {@link Standard.locale} metadata
 * @public
 */
export const provideStandardLocale = () =>
  provideStandardManager(
    _GLOBAL_LOCALE,
    _withModuleManagerSameGlobalKey(),
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

/**
 * {@inheritDoc provideStandardLocale}
 * @deprecated Use {@link provideStandardLocale} instead
 * @public
 */
export const STANDARD_LOCALE_METADATA_PROVIDER =
  /* @__PURE__ */
  provideStandardLocale()
