import { OpenGraphImage } from './open-graph-image'
import { OpenGraphType } from './open-graph-type'
import { OpenGraphProfile } from './open-graph-profile'

/**
 * {@link https://ngx-meta.dev/built-in-modules/open-graph/ | Open Graph module}
 * metadata values that can be set
 *
 * @public
 */
export interface OpenGraph {
  /**
   * Basic metadata.
   *
   * The title of your object as it should appear within the graph, e.g.,
   * "The Rock".
   *
   * Can be set with {@link GlobalMetadata.title}
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#:~:text=og%3Atitle | Property specs}
   */
  readonly title?: string | null

  /**
   * Basic metadata.
   *
   * The type of your object, e.g., "`video.movie`". Depending on the type you
   * specify, other properties may also be required.
   *
   * See {@link OpenGraphType} for a list of `const`s you can use to specify
   * the type, so you don't have to write them yourself.
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#:~:text=og%3Atypes | Property specs}
   *
   * - {@link https://ogp.me/#types | Available object types in spec}
   */
  readonly type?: OpenGraphType | null

  /**
   * Basic metadata.
   *
   * An image which should represent your object within the graph.
   *
   * Can be set (partially) with {@link GlobalMetadata.image}
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#:~:text=og%3Aimage | Property specs}
   *
   * - {@link https://ogp.me/#structured:~:text=The%20og%3Aimage | Structured property specs}
   */
  readonly image?: OpenGraphImage | null

  /**
   * Basic metadata.
   *
   * The canonical URL of your object that will be used as its permanent ID in
   * the graph, e.g., "https://www.imdb.com/title/tt0117500/".
   *
   * Can be set with {@link GlobalMetadata.canonicalUrl}
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#:~:text=og%3Aurl | Property specs}
   */
  readonly url?: URL | string | null

  /**
   * Optional metadata.
   *
   * A one to two sentence description of your object.
   *
   * Can be set with {@link GlobalMetadata.description}
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#:~:text=og%3Adescription | Property specs}
   */
  readonly description?: string | null

  /**
   * Optional metadata.
   *
   * The locale these tags are marked up in. Of the format `language_TERRITORY`.
   * If missing, assumed to be `en_US` as per Open Graph specs
   *
   * Can be set with {@link GlobalMetadata.locale}
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#:~:text=og%3Alocale | Property specs}
   */
  readonly locale?: string | null

  /**
   * Optional metadata.
   *
   * If your object is part of a larger website, the name which should be
   * displayed for the overall site. e.g., "IMDb".
   *
   * Can be set with {@link GlobalMetadata.applicationName}
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://ogp.me/#:~:text=og%3Asite_name | Property specs}
   */
  readonly siteName?: string | null

  /**
   * Open Graph profile metadata for this page
   *
   * <b>Requires Open Graph Profile module / provider to work</b>
   *
   * @remarks
   *
   * See also:
   *
   * - {@link OpenGraphProfile}
   *
   * - {@link https://ogp.me/#type_profile | Open Graph profile specs}
   */
  readonly profile?: OpenGraphProfile
}
