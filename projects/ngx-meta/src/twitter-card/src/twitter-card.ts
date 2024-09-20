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
   * @remarks
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acard, | Property specs}
   */
  readonly card?: TwitterCardType | null

  /**
   * Username or ID of the author of the website
   *
   * Used with `summary`, `summary_large_image`, `app`, `player` cards
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite, | Property specs (username) }
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Asite%3Aid,-Same%20as%20twitter | Property specs (ID) }
   */
  readonly site?: TwitterCardSite | null

  /**
   * Username or ID of the content creator
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator | Property specs (username) }
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acreator%3Aid,-Twitter | Property specs (id) }
   */
  readonly creator?: TwitterCardCreator | null

  /**
   * Description of content (maximum 200 characters)
   *
   * Used with `summary`, `summary_large_image`, `player` cards
   *
   * Equivalent to {@link OpenGraph.description}. This one can be omitted if equivalent is set.
   *
   * Can be set with {@link GlobalMetadata.description}
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=n/a-,twitter%3Adescription,-Description%20of%20content | Property specs}
   */
  readonly description?: string | null

  /**
   * Title of content (max 70 characters)
   *
   * Used with `summary`, `summary_large_image`, `player` cards
   *
   * Equivalent to {@link OpenGraph.title}. This one can be omitted if equivalent is set.
   *
   * Can be set with {@link GlobalMetadata.title}
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=og%3Adescription-,twitter%3Atitle,-Title%20of%20content | Property specs}
   */
  readonly title?: string | null

  /**
   * Image for the card
   *
   * Equivalent to {@link OpenGraph.image}. This one can be omitted if equivalent is set.
   *
   * Can be set with {@link GlobalMetadata.image}
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=og%3Atitle-,twitter%3Aimage,-URL%20of%20image | Property specs}
   */
  readonly image?: TwitterCardImage | null
}
