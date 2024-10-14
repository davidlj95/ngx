import { _GLOBAL_TITLE, _withSameNameGlobal } from '@davidlj95/ngx-meta/core'
import { provideTwitterCardManager } from '../utils/provide-twitter-card-manager'

/**
 * Manages the {@link TwitterCard.title} metadata
 * @public
 */
export const TWITTER_CARD_TITLE_METADATA_PROVIDER = provideTwitterCardManager(
  _GLOBAL_TITLE,
  _withSameNameGlobal(),
)
