/**
 * Username or ID of the author of the website
 *
 * Used with `summary`, `summary_large_image`, `app`, `player` cards
 *
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite,
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite%3Aid,-Same%20as%20twitter
 */
export type TwitterCardSite =
  | TwitterCardsSiteId
  | TwitterCardsSiteUsername
  | (TwitterCardsSiteId & TwitterCardsSiteUsername)

/**
 * Same as `twitter:site`, but the user’s Twitter ID.
 * Either `twitter:site` or `twitter:site:id` is required.
 *
 * Used with `summary`, `summary_large_image`, `player` cards
 *
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite%3Aid,-Same%20as%20twitter
 */
export interface TwitterCardsSiteId {
  id: string | null
}

/**
 * `@username` of website.
 * Either `twitter:site` or `twitter:site:id` is required.
 *
 * Used with `summary`, `summary_large_image`, `app`, `player` cards
 */
export interface TwitterCardsSiteUsername {
  username: string | null
}
