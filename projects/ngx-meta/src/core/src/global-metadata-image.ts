/**
 * {@inheritDoc GlobalMetadata.image}
 * @public
 */
export interface GlobalMetadataImage {
  /**
   * URL of the image. Used for:
   *
   *  - {@link OpenGraphImage.url} (needs Open Graph module)
   *
   *  - {@link TwitterCardImage.url} (needs Twitter Cards module)
   */
  readonly url: string | URL

  /**
   * A description of what is in the image (not a caption) to users who are
   * visually impaired.
   *
   * Used for:
   *
   *  - {@link OpenGraphImage.alt} (needs Open Graph module)
   *
   *  - {@link TwitterCardImage.alt} (needs Twitter Cards module)
   */
  readonly alt: string
}
