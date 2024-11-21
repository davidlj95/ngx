import {
  _GLOBAL_APPLICATION_NAME,
  _withModuleManagerNameAttribute,
  _withModuleManagerSameGlobalKey,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import { provideStandardManager } from '../utils/provide-standard-manager'

/**
 * Manages the {@link Standard.applicationName} metadata
 * @public
 */
export const provideStandardApplicationName = () =>
  provideStandardManager(
    _GLOBAL_APPLICATION_NAME,
    _withModuleManagerSameGlobalKey(),
    _withModuleManagerNameAttribute(withNameAttribute('application-name')),
  )

/**
 * {@inheritDoc provideStandardApplicationName}
 * @deprecated Use {@link provideStandardApplicationName} instead
 * @public
 */
export const STANDARD_APPLICATION_NAME_METADATA_PROVIDER =
  /* @__PURE__ */
  provideStandardApplicationName()
