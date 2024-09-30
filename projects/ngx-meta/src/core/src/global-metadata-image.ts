/**
 * Specifies image metadata (will be used for link previews / social cards)
 * to be used for more than one module. Like:
 *
 * - {@link OpenGraph.image} (needs standard module)
 *
 * - {@link TwitterCard.image} (needs Twitter Cards module)
 *
 * Open Graph allows for more attributes for the image.
 * Specify {@link OpenGraph.image} if you want to customize those too.
 *
 * @remarks
 *
 * Used in {@link GlobalMetadata.image} with type {@link GlobalMetadataImage}
 *
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
