/**
 * See {@link TwitterCard.creator}
 * @public
 */
export type TwitterCardCreator =
  | TwitterCardCreatorUsername
  | TwitterCardCreatorId
  | (TwitterCardCreatorUsername & TwitterCardCreatorId)

/**
 * See {@link TwitterCard.creator}
 * @public
 */
export interface TwitterCardCreatorUsername {
  /**
   * `@username` of content creator
   *
   * Used with `summary_large_image` cards
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator | Property specs}
   */
  username: string | null
}

/**
 * See {@link TwitterCard.creator}
 * @public
 */
export interface TwitterCardCreatorId {
  /**
   * Twitter user ID of content creator
   *
   * Used with `summary`, `summary_large_image` cards
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator%3Aid,-Twitter | Property specs }
   *
   * - {@link https://twiteridfinder.com/ | Find your Twitter ID}
   */
  id: string | null
}
