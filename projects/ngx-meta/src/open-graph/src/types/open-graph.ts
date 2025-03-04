import { OpenGraphImage, OpenGraphType } from '../basic-optional'
import { OpenGraphProfile } from '../profile'
import { AngularRouterUrl } from '@davidlj95/ngx-meta/core'

/**
 * {@link https://ngx-meta.dev/built-in-modules/open-graph/ | Open Graph module}
 * metadata values that can be set.
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
   * Can be set with {@link GlobalMetadata.title}.
   *
   * Title will be formatted if {@link https://ngx-meta.dev/guides/title-formatting | title formatting} is set up.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link provideOpenGraphTitle}
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
   * Provider:
   *
   * {@link provideOpenGraphType}
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
   * Can be set (partially) with {@link GlobalMetadata.image}.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link provideOpenGraphImage}
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
   * Can be set with {@link GlobalMetadata.canonicalUrl}.
   *
   * An absolute URL is needed unless {@link https://ngx-meta.dev/guides/url-resolution/ | URL resolution}
   * feature is enabled, which allows you to provide a relative URL to be resolved by the library into an
   * absolute one.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link provideOpenGraphUrl}
   *
   * See also:
   *
   * - {@link https://ogp.me/#:~:text=og%3Aurl | Property specs}
   */
  readonly url?: URL | AngularRouterUrl | string | null

  /**
   * Optional metadata.
   *
   * A one to two sentence description of your object.
   *
   * Can be set with {@link GlobalMetadata.description}.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link provideOpenGraphDescription}
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
   * If missing, assumed to be `en_US` as per Open Graph specs.
   *
   * Can be set with {@link GlobalMetadata.locale}.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link provideOpenGraphLocale}
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
   * Can be set with {@link GlobalMetadata.applicationName}.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link provideOpenGraphSiteName}
   *
   * See also:
   *
   * - {@link https://ogp.me/#:~:text=og%3Asite_name | Property specs}
   */
  readonly siteName?: string | null

  /**
   * {@inheritDoc OpenGraphProfile}
   */
  readonly profile?: OpenGraphProfile
}
