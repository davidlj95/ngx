/**
 * Twitter user ID of content creator
 *
 * Used with `summary`, `summary_large_image` cards
 *
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator%3Aid,-Twitter
 */
export type TwitterCardCreator =
  | TwitterCardCreatorId
  | TwitterCardCreatorUsername
  | (TwitterCardCreatorId & TwitterCardCreatorUsername)

/**
 * Username or ID of the content creator
 *
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator%3Aid,-Twitter
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator
 */
export interface TwitterCardCreatorId {
  id: string | null
}

/**
 * `@username` of content creator
 *
 * Used with `summary_large_image` cards
 *
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator
 */
export interface TwitterCardCreatorUsername {
  username: string | null
}
