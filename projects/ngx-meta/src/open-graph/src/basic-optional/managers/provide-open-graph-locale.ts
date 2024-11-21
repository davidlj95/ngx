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

/**
 * {@inheritDoc provideOpenGraphLocale}
 * @deprecated Use {@link provideOpenGraphLocale} instead
 * @public
 */
export const OPEN_GRAPH_LOCALE_METADATA_PROVIDER =
  /* @__PURE__ */
  provideOpenGraphLocale()
