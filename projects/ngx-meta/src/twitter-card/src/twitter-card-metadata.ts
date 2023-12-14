import { TwitterCardType } from './twitter-card-type'
import { TwitterCardImage } from './twitter-card-image'
import { TwitterCardSite } from './twitter-card-site'
import { TwitterCardCreator } from './twitter-card-creator-id'

/**
 * Specifies metadata to create Twitter cards
 *
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
 */
export class TwitterCardMetadata {
  /**
   * The card type
   *
   * Used with all cards
   *
   * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acard,
   */
  readonly card?: TwitterCardType | null

  /**
   * Username or ID of the author of the website
   *
   * Used with `summary`, `summary_large_image`, `app`, `player` cards
   *
   * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite,
   * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite%3Aid,-Same%20as%20twitter
   */
  readonly site?: TwitterCardSite

  /**
   * Username or ID of the content creator
   *
   * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator
   * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator%3Aid,-Twitter
   */
  readonly creator?: TwitterCardCreator

  /**
   * Description of content (maximum 200 characters)
   *
   * Used with `summary`, `summary_large_image`, `player` cards
   */
  readonly description?: string | null

  /**
   * Title of content (max 70 characters)
   *
   * Used with `summary`, `summary_large_image`, `player` cards
   */
  readonly title?: string | null

  /**
   * Image for the card
   */
  readonly image?: TwitterCardImage | null
}
