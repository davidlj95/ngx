export const TWITTER_CARD_TYPE_SUMMARY = 'summary'
export const TWITTER_CARD_TYPE_SUMMARY_LARGE_IMAGE = 'summary_large_image'
export const TWITTER_CARD_TYPE_APP = 'app'
export const TWITTER_CARD_TYPE_PLAYER = 'player'

export type TwitterCardType =
  | typeof TWITTER_CARD_TYPE_SUMMARY
  | typeof TWITTER_CARD_TYPE_SUMMARY_LARGE_IMAGE
  | typeof TWITTER_CARD_TYPE_APP
  | typeof TWITTER_CARD_TYPE_PLAYER
