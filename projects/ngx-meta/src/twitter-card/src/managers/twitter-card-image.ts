/**
 * Image for the card.
 *
 * Equivalent to {@link OpenGraph.image}. This one can be omitted if equivalent is set.
 *
 * Can be set with {@link GlobalMetadata.image}.
 *
 * Used in {@link TwitterCard.image} with type {@link TwitterCardImage}
 *
 * @remarks
 *
 * Provider:
 *
 * {@link provideTwitterCardImage}
 *
 * See also:
 *
 * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=og%3Atitle-,twitter%3Aimage,-URL%20of%20image | Property specs}
 * @public
 */
export interface TwitterCardImage {
  /**
   * URL of image to use in the card. Images must be less than 5MB in size.
   *
   * JPG, PNG, WEBP and GIF formats are supported.
   *
   * Only the first frame of an animated GIF will be used.
   *
   * SVG is not supported.
   *
   * Used with `summary`, `summary_large_image`, `player` cards
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=og%3Atitle-,twitter%3Aimage,-URL%20of%20image | Property specs}
   */
  readonly url: string | URL

  /**
   * A text description of the image conveying the essential nature of an image
   * to users who are visually impaired.
   *
   * Maximum 420 characters.
   *
   * Used with `summary`, `summary_large_image`, `player` cards
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=og%3Atitle-,twitter%3Aimage,-URL%20of%20image | Property specs}
   */
  readonly alt: string
}
