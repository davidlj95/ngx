import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'

/**
 * Manages the {@link TwitterCard.card} metadata
 * @public
 */
export const TWITTER_CARD_CARD_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider('card')
