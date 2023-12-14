/**
 * Defines an image to be used in metadata. Specifically, as:
 *  - Open Graph image
 *  - Twitter card image
 *
 * @see https://ogp.me/#structured:~:text=The-,og%3Aimage
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
 */
export interface GlobalMetadataImage {
  /**
   * URL of the image
   *
   * Used for:
   *  - Open Graph `og:image`/`og:image:url`
   *  - Twitter card `twitter:image`
   *
   * @see https://ogp.me/#structured:~:text=og%3Aimage%3Aurl
   * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image#:~:text=twitter%3Aimage,-A%20URL%20to
   */
  readonly url: string | URL

  /**
   * A description of what is in the image (not a caption) to users who are
   * visually impaired.
   *
   * Used for:
   *  - Open Graph `og:image:alt`
   *  - Twitter card `twitter:image:alt`
   *
   * @see https://ogp.me/#structured:~:text=og%3Aimage%3Aalt
   * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image#:~:text=twitter%3Aimage%3Aalt,-A%20text%20description
   */
  readonly alt: string
}
