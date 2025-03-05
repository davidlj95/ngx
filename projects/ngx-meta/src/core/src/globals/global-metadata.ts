import { GlobalMetadataImage } from './global-metadata-image'
import { AngularRouterUrl } from '../url-resolution'

/**
 * Specifies metadata that will be used by more than one module.
 *
 * @public
 */
export interface GlobalMetadata {
  /**
   * Sets title for:
   *
   *  - {@link Standard.title} (needs standard module)
   *
   *  - {@link OpenGraph.title} (needs Open Graph module)
   *
   *  - {@link TwitterCard.title} (needs Twitter Cards module)
   *
   * Title will be formatted for all of them when
   * {@link https://ngx-meta.dev/guides/title-formatting | title formatting} is set up.
   */
  readonly title?: string

  /**
   * Sets description for:
   *
   *  - {@link Standard.description} (needs standard module)
   *
   *  - {@link OpenGraph.description} (needs Open Graph module)
   *
   *  - {@link TwitterCard.description} (needs Twitter Cards module)
   */
  readonly description?: string | null

  /**
   * Sets application name for:
   *
   *  - {@link Standard.applicationName} (needs standard module)
   *
   *  - {@link OpenGraph.siteName} (needs Open Graph module)
   */
  readonly applicationName?: string | null

  /**
   * Sets canonical URL for:
   *
   *  - {@link Standard.canonicalUrl} (needs standard module)
   *
   *  - {@link OpenGraph.url} (needs Open Graph module)
   *
   * If {@link https://ngx-meta.dev/guides/url-resolution/ | URL resolution} feature is enabled, you may use
   * a relative URL here. It will be resolved and the absolute URL will be used instead.
   *
   * You can also use the special value {@link ANGULAR_ROUTER_URL} to use the current Angular router's URL
   * as the relative URL to be resolved into an absolute one.
   */
  readonly canonicalUrl?: URL | AngularRouterUrl | string | null

  /**
   * Sets localization of this page.
   *
   * Value must be a valid language tag complying with BCP 47.
   * For instance: "`es`" or "`es-ES`"
   *
   * For:
   *
   *  - {@link Standard.locale} (needs standard module)
   *
   *  - {@link OpenGraph.locale} (needs Open Graph module)
   *
   * @remarks
   *
   * See also:
   *
   * - {@link https://datatracker.ietf.org/doc/html/rfc5646 | RFC 5646 / BCP 47}
   */
  readonly locale?: string | null

  /**
   * {@inheritDoc GlobalMetadataImage}
   */
  readonly image?: GlobalMetadataImage | null
}

/**
 * @internal
 */
export const _GLOBAL_TITLE = 'title' satisfies keyof GlobalMetadata
/**
 * @internal
 */
export const _GLOBAL_DESCRIPTION = 'description' satisfies keyof GlobalMetadata
/**
 * @internal
 */
export const _GLOBAL_APPLICATION_NAME =
  'applicationName' satisfies keyof GlobalMetadata
/**
 * @internal
 */
export const _GLOBAL_CANONICAL_URL =
  'canonicalUrl' satisfies keyof GlobalMetadata
/**
 * @internal
 */
export const _GLOBAL_LOCALE = 'locale' satisfies keyof GlobalMetadata
/**
 * @internal
 */
export const _GLOBAL_IMAGE = 'image' satisfies keyof GlobalMetadata
