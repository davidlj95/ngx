import { GlobalMetadataImage } from './global-metadata-image'

export interface GlobalMetadata {
  /**
   * Sets
   *  - Standard `<title>` HTML element
   *  - Open Graph title (if Open Graph module present)
   *  - Twitter card title (if Twitter card module present)
   */
  readonly title?: string

  /**
   * Sets
   *  - Standard `<meta name='description'>` HTML element
   *  - Open Graph description (if Open Graph module present)
   *  - Twitter card description (if Twitter card module present)
   *
   * Recommendations:
   *  - Open Graph: 1 or 2 sentences for Open Graph
   *  - Twitter card: 200 characters for Twitter card
   *
   * See specific details in each module
   */
  readonly description?: string | null

  /**
   * Sets
   *  - Standard `<meta name='application-name'> HTML element
   *  - Open Graph site name (if Open Graph module present)
   *
   * Recommendations:
   *  - Standard: must not be used if the page is not a web application
   */
  readonly applicationName?: string | null

  /**
   * Sets
   *  - Standard `<link rel='canonical'>` HTML element
   *  - Open Graph URL (if Open Graph module present)
   *
   * Recommendations:
   *  - Standard: check standard doc links
   */
  readonly canonicalUrl?: URL | string | null

  /**
   * Language & localization of this page
   *
   * Value must be a valid language tag complying with BCP 47
   * For instance: "es" or "es-ES"
   *
   * Sets the
   *  - Standard `lang` attribute to the `<html>` element
   *  - Open Graph locale (if Open Graph module present)
   *
   * @see https://datatracker.ietf.org/doc/html/rfc5646 (BCP 47)
   */
  readonly locale?: string | null

  /**
   * Image metadata for this page
   *
   * If present, will use it as image for Open Graph and/or Twitter cards, even
   * if the `image` property for those is not set
   *
   * Does nothing if neither Open Graph nor Twitter card modules are present
   *
   * Open Graph allows for more attributes for the image. Specify Open Graph
   * image if you want to customize those too.
   */
  readonly image?: GlobalMetadataImage | null
}
