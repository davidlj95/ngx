import { OpenGraphType } from './open-graph-type'
import { OpenGraphImage } from './open-graph-image'

/**
 * Open Graph metadata for this page
 *
 * When sharing page via social media, allows to customize preview cards
 *
 * @see https://ogp.me/
 * @see https://developers.facebook.com/tools/debug/
 * @see https://opengraph.dev/
 */
export interface OpenGraph {
  /**
   * Basic metadata.
   *
   * The title of your object as it should appear within the graph, e.g.,
   * "The Rock".
   *
   * @see https://ogp.me/#:~:text=og%3Atitle
   */
  readonly title?: string | null

  /**
   * Basic metadata.
   *
   * The type of your object, e.g., "video.movie". Depending on the type you
   * specify, other properties may also be required.
   *
   * @see https://ogp.me/#:~:text=og%3Atypes
   * @see https://ogp.me/#types
   */
  readonly type?: OpenGraphType | null

  /**
   * Basic metadata.
   *
   * An image URL which should represent your object within the graph.
   *
   * @see https://ogp.me/#:~:text=og%3Aimage
   * @see https://ogp.me/#structured:~:text=The%20og%3Aimage
   */
  readonly image?: OpenGraphImage | null

  /**
   * Basic metadata.
   *
   * The canonical URL of your object that will be used as its permanent ID in
   * the graph, e.g., "https://www.imdb.com/title/tt0117500/".
   *
   * @see https://ogp.me/#:~:text=og%3Aurl
   */
  readonly url?: URL | string | null

  /**
   * Optional metadata.
   *
   * A one to two sentence description of your object.
   *
   * @see https://ogp.me/#:~:text=og%3Adescription
   */
  readonly description?: string | null

  /**
   * Optional metadata.
   *
   * The locale these tags are marked up in. Of the format language_TERRITORY.
   * Default is en_US.
   *
   * @see https://ogp.me/#:~:text=og%3Alocale
   */
  readonly locale?: string | null

  /**
   * Optional metadata.
   *
   * If your object is part of a larger website, the name which should be
   * displayed for the overall site. e.g., "IMDb".
   *
   * @see https://ogp.me/#:~:text=og%3Asite_name
   */
  readonly siteName?: string | null
}
