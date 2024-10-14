import {
  _GLOBAL_APPLICATION_NAME,
  _withModuleManagerNameAttribute,
  _withSameNameGlobal,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import { provideStandardManager } from '../utils/provide-standard-manager'

/**
 * Manages the {@link Standard.applicationName} metadata
 * @public
 */
export const STANDARD_APPLICATION_NAME_METADATA_PROVIDER =
  provideStandardManager(
    _GLOBAL_APPLICATION_NAME,
    _withSameNameGlobal(),
    _withModuleManagerNameAttribute(withNameAttribute('application-name')),
  )
