/**
 * See {@link TwitterCardType}
 * @public
 */
export const TWITTER_CARD_TYPE_SUMMARY = 'summary'

/**
 * See {@link TwitterCardType}
 * @public
 */
export const TWITTER_CARD_TYPE_SUMMARY_LARGE_IMAGE = 'summary_large_image'

/**
 * See {@link TwitterCardType}
 * @public
 */
export const TWITTER_CARD_TYPE_APP = 'app'

/**
 * See {@link TwitterCardType}
 * @public
 */
export const TWITTER_CARD_TYPE_PLAYER = 'player'

/**
 * Card types for {@link TwitterCard.card} property
 *
 * @remarks
 *
 * Use one of the referenced constants to avoid typing them yourself :)
 *
 * @public
 */
export type TwitterCardType =
  | typeof TWITTER_CARD_TYPE_SUMMARY
  | typeof TWITTER_CARD_TYPE_SUMMARY_LARGE_IMAGE
  | typeof TWITTER_CARD_TYPE_APP
  | typeof TWITTER_CARD_TYPE_PLAYER
