import {
  _GLOBAL_TITLE,
  _withModuleManagerSameGlobalKey,
} from '@davidlj95/ngx-meta/core'
import { provideOpenGraphManager } from '../../utils/provide-open-graph-manager'

/**
 * Manages the {@link OpenGraph.title} metadata
 * @public
 */
export const provideOpenGraphTitle = () =>
  provideOpenGraphManager(_GLOBAL_TITLE, _withModuleManagerSameGlobalKey())

/**
 * {@inheritDoc provideOpenGraphTitle}
 * @deprecated Use {@link provideOpenGraphTitle} instead
 * @public
 */
export const OPEN_GRAPH_TITLE_METADATA_PROVIDER =
  /* @__PURE__ */
  provideOpenGraphTitle()
