import { TwitterCardType } from './twitter-card-type'
import { TwitterCardImage } from './twitter-card-image'
import { TwitterCardSite } from './twitter-card-site'
import { TwitterCardCreator } from './twitter-card-creator'

/**
 * {@link https://ngx-meta.dev/built-in-modules/twitter-cards/ | Twitter Cards module}
 * metadata values that can be set.
 *
 * @public
 */
export interface TwitterCard {
  // noinspection JSValidateJSDoc
  /**
   * The card type.
   *
   * Used with all cards.
   *
   * If an {@link OpenGraph."type"}, {@link OpenGraph.title} and {@link OpenGraph.description} exist in the markup but
   * {@link TwitterCard.card} is absent, then a summary card may be rendered.
   *
   * Check out {@link TwitterCardType} type for a list of constants you can use
   * to specify the card's type.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link TWITTER_CARD_CARD_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=twitter%3Acard, | Property specs}
   */
  readonly card?: TwitterCardType | null

  /**
   * {@inheritDoc TwitterCardSite}
   */
  readonly site?: TwitterCardSite | null

  /**
   * {@inheritDoc TwitterCardCreator}
   */
  readonly creator?: TwitterCardCreator | null

  /**
   * Description of content (maximum 200 characters).
   *
   * Used with `summary`, `summary_large_image`, `player` cards.
   *
   * Equivalent to {@link OpenGraph.description}. This one can be omitted if equivalent is set.
   *
   * Can be set with {@link GlobalMetadata.description}.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=n/a-,twitter%3Adescription,-Description%20of%20content | Property specs}
   */
  readonly description?: string | null

  /**
   * Title of content (max 70 characters).
   *
   * Used with `summary`, `summary_large_image`, `player` cards.
   *
   * Equivalent to {@link OpenGraph.title}. This one can be omitted if equivalent is set.
   *
   * Can be set with {@link GlobalMetadata.title}.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link TWITTER_CARD_TITLE_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=og%3Adescription-,twitter%3Atitle,-Title%20of%20content | Property specs}
   */
  readonly title?: string | null

  /**
   * {@inheritDoc TwitterCardImage}
   */
  readonly image?: TwitterCardImage | null
}
