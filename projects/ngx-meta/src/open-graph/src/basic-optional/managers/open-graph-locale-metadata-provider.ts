import {
  _GLOBAL_LOCALE,
  _withModuleManagerSameGlobalKey,
} from '@davidlj95/ngx-meta/core'
import { provideOpenGraphManager } from '../../utils/provide-open-graph-manager'

/**
 * Manages the {@link OpenGraph.locale} metadata
 * @public
 */
export const OPEN_GRAPH_LOCALE_METADATA_PROVIDER = provideOpenGraphManager(
  _GLOBAL_LOCALE,
  _withModuleManagerSameGlobalKey(),
)
