export interface TwitterCardImage {
  /**
   * URL of image to use in the card. Images must be less than 5MB in size.
   * JPG, PNG, WEBP and GIF formats are supported.
   * Only the first frame of an animated GIF will be used.
   * SVG is not supported.
   *
   * Used with `summary`, `summary_large_image`, `player` cards
   */
  readonly url: string | URL

  /**
   * A text description of the image conveying the essential nature of an image
   * to users who are visually impaired. Maximum 420 characters.
   *
   * Used with `summary`, `summary_large_image`, `player` cards
   */
  readonly alt: string
}
