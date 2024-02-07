/**
 * See {@link TwitterCard.site}
 * @public
 */
export type TwitterCardSite =
  | TwitterCardSiteUsername
  | TwitterCardSiteId
  | (TwitterCardSiteUsername & TwitterCardSiteId)

/**
 * See {@link TwitterCard.site}
 * @public
 */
export interface TwitterCardSiteUsername {
  /**
   * `@username` of website.
   *
   * Either {@link TwitterCardSiteUsername} or {@link TwitterCardSiteId} is required.
   *
   * Used with `summary`, `summary_large_image`, `app`, `player` cards
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite, | Property specs }
   *
   * @public
   */
  username: string | null
}

/**
 * See {@link TwitterCard.site}
 * @public
 */
export interface TwitterCardSiteId {
  /**
   * Same as {@link TwitterCardSiteUsername}, but the user’s Twitter ID.
   *
   * Either {@link TwitterCardSiteUsername} or {@link TwitterCardSiteId} is required.
   *
   * Used with `summary`, `summary_large_image`, `player` cards
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite%3Aid,-Same%20as%20twitter | Property specs (ID) }
   *
   * - {@link https://twiteridfinder.com/ | Find your Twitter ID}
   *
   * @public
   */
  id: string | null
}
