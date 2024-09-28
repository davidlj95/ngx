/**
 * `@username` or Twitter ID of the content creator.
 *
 * @remarks
 *
 * Provider:
 *
 * {@link TWITTER_CARD_CREATOR_METADATA_PROVIDER}
 *
 * See also:
 *
 * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator | Property specs (username) }
 *
 * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator%3Aid,-Twitter | Property specs (id) }
 *
 * @example
 *
 * Providing both the `@username` and id. Just one of them is enough though.
 *
 * ```typescript
 * const twitterCardCreator: TwitterCardCreator = {
 *    username: '@example',
 *    id: 16542877,
 * }
 * ```
 *
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
   * `@username` of content creator.
   *
   * Used with `summary_large_image` cards.
   *
   * In other words, same ones as {@link TwitterCardCreatorId} except for `summary` cards.
   *
   * @remarks
   *
   * See also:
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
   * Twitter user ID of content creator.
   *
   * Used with `summary`, `summary_large_image` cards.
   *
   * In other words, same ones as {@link TwitterCardCreatorUsername} plus `summary` cards.
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator%3Aid,-Twitter | Property specs }
   *
   * - {@link https://twiteridfinder.com/ | Find your Twitter ID}
   */
  id: string | null
}
