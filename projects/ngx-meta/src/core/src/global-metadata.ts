import { GlobalMetadataImage } from './global-metadata-image'

/**
 * Specifies metadata that will be used by more than one module
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
   */
  readonly canonicalUrl?: URL | string | null

  /**
   * Sets localization of this page
   *
   * Value must be a valid language tag complying with BCP 47
   * For instance: "`es`" or "`es-ES`"
   *
   * For:
   *
   *  - {@link Standard.locale} (needs standard module)
   *
   *  - {@link OpenGraph.locale} (needs Open Graph module)
   *
   * @see {@link https://datatracker.ietf.org/doc/html/rfc5646 | RFC 5646/BCP 47}
   */
  readonly locale?: string | null

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
   */
  readonly image?: GlobalMetadataImage | null
}

export const GLOBAL_TITLE = 'title' satisfies keyof GlobalMetadata
export const GLOBAL_DESCRIPTION = 'description' satisfies keyof GlobalMetadata
export const GLOBAL_APPLICATION_NAME =
  'applicationName' satisfies keyof GlobalMetadata

export const GLOBAL_CANONICAL_URL =
  'canonicalUrl' satisfies keyof GlobalMetadata
export const GLOBAL_LOCALE = 'locale' satisfies keyof GlobalMetadata
export const GLOBAL_IMAGE = 'image' satisfies keyof GlobalMetadata
