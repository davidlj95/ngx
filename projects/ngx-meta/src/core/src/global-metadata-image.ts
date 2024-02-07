/**
 * {@inheritDoc GlobalMetadata.image}
 * @public
 */
export interface GlobalMetadataImage {
  /**
   * URL of the image. Used for:
   *
   *  - {@link OpenGraphImage.url}
   *
   *  - {@link TwitterCardImage.url}
   */
  readonly url: string | URL

  /**
   * A description of what is in the image (not a caption) to users who are
   * visually impaired.
   *
   * Used for:
   *
   *  - {@link OpenGraphImage.alt}
   *
   *  - {@link TwitterCardImage.alt}
   */
  readonly alt: string
}
