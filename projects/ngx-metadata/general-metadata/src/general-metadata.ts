import { GeneralMetadataImage } from './general-metadata-image'

export interface GeneralMetadata {
  /**
   * Sets the `<title>` HTML tag and:
   *  - Open Graph title (if Open Graph enabled)
   *  - Twitter card title (if Twitter card enabled)
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
   * @see https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute
   */
  readonly title?: string | null

  /**
   * Sets the `<meta name='description'>` HTML tag and:
   *  - Open Graph description (if Open Graph enabled)
   *  - Twitter card description (if Twitter card enabled)
   *
   * Recommended limit:
   *  - 1 or 2 sentences for Open Graph
   *  - 200 characters for Twitter card
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=description
   * @see https://html.spec.whatwg.org/multipage/semantics.html#meta-description
   */
  readonly description?: string | null

  /**
   * Sets the `<meta name='author'>` HTML tag
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=author
   * @see https://html.spec.whatwg.org/multipage/semantics.html#meta-author
   */
  readonly author?: string | null

  /**
   * Sets the `<meta name='keywords'>` HTML tag
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=keywords
   * @see https://html.spec.whatwg.org/multipage/semantics.html#meta-keywords
   */
  readonly keywords?: ReadonlyArray<string> | null

  /**
   * Includes Angular version used to generate the page
   *
   * Sets the `<meta name='generator'> HTML tag
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=generator
   * @see https://html.spec.whatwg.org/multipage/semantics.html#meta-generator
   */
  readonly generator?: boolean | null

  /**
   * Sets the `<meta name='application-name'> HTML tag
   *
   * From MDN: simple web pages shouldn't define an application name
   * From HTML specs: if the page is not a web application, the
   * `application-name` metadata name must not be used
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=application%2Dname
   * @see https://html.spec.whatwg.org/multipage/semantics.html#meta-application-name
   */
  readonly applicationName?: string | null

  /**
   * Canonical URL for this page
   *
   * Sets the `<link rel='canonical'>` HTML tag and:
   *  - Open Graph URL (if Open Graph enabled)
   *
   * @see https://support.google.com/webmasters/answer/10347851?hl=en
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#canonical
   * @see https://html.spec.whatwg.org/multipage/links.html#link-type-canonical
   */
  readonly canonicalUrl?: URL | string | null

  /**
   * Language & localization of this page
   *
   * Value must be a valid language tag complying with BCP 47
   * For instance: "es" or "es-ES"
   *
   * Sets the `lang` attribute to the `<html>` tag and:
   *  - Open Graph locale (if Open Graph enabled)
   *
   * @see https://datatracker.ietf.org/doc/html/rfc5646 (BCP 47)
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
   * @see https://html.spec.whatwg.org/multipage/dom.html#attr-lang
   */
  readonly locale?: string | null

  /**
   * Image metadata for this page
   *
   * If present, will use it as image for Open Graph and/or Twitter cards, even
   * if the `image` property for those is `undefined`.
   *
   * Does nothing if neither Open Graph nor Twitter card metadata is enabled.
   *
   * Open Graph allows for more attributes for the image. Specify Open Graph
   * image if you want to customize those too.
   */
  readonly image?: GeneralMetadataImage | null
}
