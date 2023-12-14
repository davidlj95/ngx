import { TwitterCardType } from './twitter-card-type'
import { TwitterCardImage } from './twitter-card-image'

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
   */
  readonly card?: TwitterCardType | null

  /**
   * `@username` of website. Either `twitter:site` or `twitter:site:id` is required.
   *
   * Used with `summary`, `summary_large_image`, `app`, `player cards`
   */
  readonly site?: string | null

  /**
   * Same as twitter:site, but the user’s Twitter ID. Either `twitter:site` or
   * `twitter:site:id` is required.
   *
   * Used with `summary`, `summary_large_image`, `player cards`
   */
  readonly siteId?: string | null

  /**
   * `@username` of content creator
   *
   * Used with `summary_large_image` cards
   */
  readonly creator?: string | null

  /**
   * Twitter user ID of content creator
   *
   * Used with `summary`, `summary_large_image` cards
   */
  readonly creatorId?: string | null

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
