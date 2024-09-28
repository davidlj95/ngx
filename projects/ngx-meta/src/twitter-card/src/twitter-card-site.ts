/**
 * `@username` or Twitter ID of the author of the website.
 *
 * Either {@link TwitterCardSiteUsername} or {@link TwitterCardSiteId} is required.
 *
 * @remarks
 *
 * Provider:
 *
 * {@link TWITTER_CARD_SITE_METADATA_PROVIDER}
 *
 * See also:
 *
 * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite, | Property specs (username) }
 *
 * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite%3Aid,-Same%20as%20twitter | Property specs (id) }
 *
 * @example
 *
 * Providing both the `@username` and id. Just one of them is enough though.
 *
 * ```typescript
 * const twitterCardSite: TwitterCardSite = {
 *    username: '@example',
 *    id: 16542877,
 * }
 * ```
 *
 * @public
 */
export type TwitterCardSite =
  | TwitterCardSiteUsername
  | TwitterCardSiteId
  | (TwitterCardSiteUsername & TwitterCardSiteId)

/**
 * See {@link TwitterCardSite}
 * @public
 */
export interface TwitterCardSiteUsername {
  /**
   * `@username` of website.
   *
   * Either {@link TwitterCardSiteUsername} or {@link TwitterCardSiteId} is required.
   *
   * Used with `summary`, `summary_large_image`, `app`, `player` cards.
   *
   * In other words, same ones as {@link TwitterCardSiteId} plus `app` cards.
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite, | Property specs }
   *
   * @public
   */
  username: string | null
}

/**
 * See {@link TwitterCardSite}
 *
 * @public
 */
export interface TwitterCardSiteId {
  /**
   * Same as {@link TwitterCardSiteUsername}, but the user’s Twitter ID.
   *
   * Either {@link TwitterCardSiteUsername} or {@link TwitterCardSiteId} is required.
   *
   * Used with `summary`, `summary_large_image`, `player` cards.
   *
   * In other words, same ones as {@link TwitterCardSiteUsername} except for `app` cards.
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite%3Aid,-Same%20as%20twitter | Property specs (id) }
   *
   * - {@link https://twiteridfinder.com/ | Find your Twitter ID}
   *
   * @public
   */
  id: string | null
}
