import {
  _GLOBAL_TITLE,
  _withModuleManagerSameGlobalKey,
} from '@davidlj95/ngx-meta/core'
import { provideOpenGraphManager } from '../../utils/provide-open-graph-manager'

/**
 * Provides a metadata manager for {@link OpenGraph.title}
 *
 * @public
 */
export const provideOpenGraphTitle = () =>
  provideOpenGraphManager(_GLOBAL_TITLE, _withModuleManagerSameGlobalKey())
