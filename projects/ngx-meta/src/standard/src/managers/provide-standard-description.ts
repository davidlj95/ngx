import {
  _GLOBAL_DESCRIPTION,
  _withModuleManagerSameGlobalKey,
} from '@davidlj95/ngx-meta/core'
import { provideStandardManager } from '../utils/provide-standard-manager'

/**
 * Manages the {@link Standard.description} metadata
 * @public
 */
export const provideStandardDescription = () =>
  provideStandardManager(_GLOBAL_DESCRIPTION, _withModuleManagerSameGlobalKey())

/**
 * {@inheritDoc provideStandardDescription}
 * @deprecated Use {@link provideStandardDescription} instead
 * @public
 */
export const STANDARD_DESCRIPTION_METADATA_PROVIDER =
  /* @__PURE__ */
  provideStandardDescription()
