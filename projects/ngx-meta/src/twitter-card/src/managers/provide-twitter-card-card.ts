import { provideTwitterCardManager } from '../utils/provide-twitter-card-manager'

/**
 * Manages the {@link TwitterCard.card} metadata
 * @public
 */
export const provideTwitterCardCard = () => provideTwitterCardManager('card')

/**
 * {@inheritDoc provideTwitterCardCard}
 * @deprecated Use {@link provideTwitterCardCard} instead
 * @public
 */
export const TWITTER_CARD_CARD_METADATA_PROVIDER =
  /* @__PURE__ */
  provideTwitterCardCard()
