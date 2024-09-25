/**
 * See {@link OpenGraph.image}
 * @public
 */
export interface OpenGraphImage {
  /**
   * An image URL which should represent your object within the graph
   *
   * Can be unset to use image from global metadata
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#structured:~:text=og%3Aimage%3Aurl | Property specs}
   */
  readonly url?: URL | string

  /**
   * A description of what is in the image (not a caption). If the page
   * specifies an `og:image` it should specify `og:image:alt`.
   *
   * Can be unset to use image from global metadata
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#structured:~:text=og%3Aimage%3Aalt | Property specs}
   */
  readonly alt?: string

  /**
   * An alternate url to use if the webpage requires HTTPS.
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#structured:~:text=og%3Aimage%3Asecure_url | Property specs}
   */
  readonly secureUrl?: URL | string | null

  /**
   * A MIME type for this image.
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#structured:~:text=og%3Aimage%3Atype | Property specs}
   */
  readonly type?: string | null

  /**
   * The number of pixels wide.
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#structured:~:text=og%3Aimage%3Awidth | Property specs}
   */
  readonly width?: number | null

  /**
   * The number of pixels high.
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#structured:~:text=og%3Aimage%3Aheight | Property specs}
   */
  readonly height?: number | null
}
