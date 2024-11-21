import {
  _GLOBAL_TITLE,
  _withModuleManagerSameGlobalKey,
} from '@davidlj95/ngx-meta/core'
import { provideTwitterCardManager } from '../utils/provide-twitter-card-manager'

/**
 * Manages the {@link TwitterCard.title} metadata
 * @public
 */
export const provideTwitterCardTitle = () =>
  provideTwitterCardManager(_GLOBAL_TITLE, _withModuleManagerSameGlobalKey())

/**
 * {@inheritDoc provideTwitterCardTitle}
 * @deprecated Use {@link provideTwitterCardTitle} instead
 * @public
 */
export const TWITTER_CARD_TITLE_METADATA_PROVIDER =
  /* @__PURE__ */
  provideTwitterCardTitle()
