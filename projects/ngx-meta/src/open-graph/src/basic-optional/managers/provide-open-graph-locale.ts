import {
  _GLOBAL_LOCALE,
  _withModuleManagerSameGlobalKey,
} from '@davidlj95/ngx-meta/core'
import { provideOpenGraphManager } from '../../utils/provide-open-graph-manager'

/**
 * Manages the {@link OpenGraph.locale} metadata
 * @public
 */
export const provideOpenGraphLocale = () =>
  provideOpenGraphManager(_GLOBAL_LOCALE, _withModuleManagerSameGlobalKey())
