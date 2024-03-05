import { TwitterCardType } from './twitter-card-type'
import { TwitterCardImage } from './twitter-card-image'
import { TwitterCardSite } from './twitter-card-site'
import { TwitterCardCreator } from './twitter-card-creator'

/**
 * {@link https://ngx-meta.dev/built-in-modules/twitter-cards/ | Twitter Cards module}
 * metadata values that can be set
 *
 * @public
 */
export interface TwitterCard {
  /**
   * The card type
   *
   * Used with all cards
   *
   * Check out {@link TwitterCardType} type for a list of constants you can use
   * to specify the card's type
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acard, | Property specs}
   */
  readonly card?: TwitterCardType | null

  /**
   * Username or ID of the author of the website
   *
   * Used with `summary`, `summary_large_image`, `app`, `player` cards
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite, | Property specs (username) }
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite%3Aid,-Same%20as%20twitter | Property specs (ID) }
   */
  readonly site?: TwitterCardSite

  /**
   * Username or ID of the content creator
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator | Property specs (username) }
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator%3Aid,-Twitter | Property specs (id) }
   */
  readonly creator?: TwitterCardCreator

  /**
   * Description of content (maximum 200 characters)
   *
   * Can be set with {@link GlobalMetadata.description}
   *
   * Used with `summary`, `summary_large_image`, `player` cards
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=n/a-,twitter%3Adescription,-Description%20of%20content | Property specs}
   */
  readonly description?: string | null

  /**
   * Title of content (max 70 characters)
   *
   * Used with `summary`, `summary_large_image`, `player` cards
   *
   * Can be set with {@link GlobalMetadata.title}
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=og%3Adescription-,twitter%3Atitle,-Title%20of%20content | Property specs}
   */
  readonly title?: string | null

  /**
   * Image for the card
   *
   * Can be set with {@link GlobalMetadata.image}
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=og%3Atitle-,twitter%3Aimage,-URL%20of%20image | Property specs}
   */
  readonly image?: TwitterCardImage | null
}
