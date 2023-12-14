import { TwitterCardSiteId } from './twitter-card-site-id'
import { TwitterCardSiteUsername } from './twitter-card-site-username'

/**
 * Username or ID of the author of the website
 *
 * Used with `summary`, `summary_large_image`, `app`, `player` cards
 *
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite,
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite%3Aid,-Same%20as%20twitter
 */
export type TwitterCardSite =
  | TwitterCardSiteId
  | TwitterCardSiteUsername
  | (TwitterCardSiteId & TwitterCardSiteUsername)
