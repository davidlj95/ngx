import { TwitterCardCreatorId } from './twitter-card-creator'
import { TwitterCardCreatorUsername } from './twitter-card-creator-username'

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
