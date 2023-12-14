export interface OpenGraphImage {
  /**
   * An image URL which should represent your object within the graph
   *
   * Can be unset to use image from global metadata
   *
   * @see https://ogp.me/#structured:~:text=og%3Aimage%3Aurl
   */
  readonly url?: URL | string

  /**
   * A description of what is in the image (not a caption). If the page
   * specifies an `og:image` it should specify `og:image:alt`.
   *
   * Can be unset to use image from global metadata
   *
   * @see https://ogp.me/#structured:~:text=og%3Aimage%3Aalt
   */
  readonly alt?: string

  /**
   * An alternate url to use if the webpage requires HTTPS.
   *
   * @see https://ogp.me/#structured:~:text=og%3Aimage%3Asecure_url
   */
  readonly secureUrl?: URL | string | null

  /**
   * A MIME type for this image.
   *
   * @see https://ogp.me/#structured:~:text=og%3Aimage%3Atype
   */
  readonly type?: string | null

  /**
   * The number of pixels wide.
   *
   * @see https://ogp.me/#structured:~:text=og%3Aimage%3Awidth
   */
  readonly width?: number | null

  /**
   * The number of pixels high.
   *
   * @see https://ogp.me/#structured:~:text=og%3Aimage%3Aheight
   */
  readonly height?: number | null
}
