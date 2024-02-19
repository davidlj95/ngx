import { GlobalMetadata } from '@davidlj95/ngx-meta/core'

/**
 * {@link https://ngx-meta.pages.dev/built-in-modules/standard/ | Standard module}
 * metadata values that can be set
 *
 * @public
 */
export interface Standard {
  /**
   * Sets the `<title>` HTML element
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
   * @see https://html.spec.whatwg.org/multipage/semantics.html#the-title-element
   */
  readonly title?: GlobalMetadata['title']

  /**
   * Sets the `<meta name='description'>` HTML element
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=description
   * @see https://html.spec.whatwg.org/multipage/semantics.html#meta-description
   */
  readonly description?: GlobalMetadata['description']

  /**
   * Sets the `<meta name='author'>` HTML element
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=author
   * @see https://html.spec.whatwg.org/multipage/semantics.html#meta-author
   */
  readonly author?: string | null

  /**
   * Sets the `<meta name='keywords'>` HTML element
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=keywords
   * @see https://html.spec.whatwg.org/multipage/semantics.html#meta-keywords
   */
  readonly keywords?: ReadonlyArray<string> | null

  /**
   * Includes Angular version used to generate the page
   *
   * Sets the `#!html <meta name='generator'>` HTML tag
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=generator
   * @see https://html.spec.whatwg.org/multipage/semantics.html#meta-generator
   */
  readonly generator?: true | null

  /**
   * Sets the `<meta name='application-name'>` HTML element
   *
   * Recommendations:
   * - From MDN: simple web pages shouldn't define an application name
   * - From HTML specs: if the page is not a web application, the
   * `application-name` metadata name must not be used
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=application%2Dname
   * @see https://html.spec.whatwg.org/multipage/semantics.html#meta-application-name
   */
  readonly applicationName?: GlobalMetadata['applicationName']

  /**
   * Sets the `<link rel='canonical'>` HTML element
   *
   * @see https://support.google.com/webmasters/answer/10347851?hl=en
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#canonical
   * @see https://html.spec.whatwg.org/multipage/links.html#link-type-canonical
   */
  readonly canonicalUrl?: GlobalMetadata['canonicalUrl']

  /**
   * Sets the `lang` attribute to the `<html>` element
   *
   * Value must be a valid language tag complying with BCP 47
   * For instance: "es" or "es-ES"
   *
   * @see https://datatracker.ietf.org/doc/html/rfc5646 (BCP 47)
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
   * @see https://html.spec.whatwg.org/multipage/dom.html#attr-lang
   */
  readonly locale?: GlobalMetadata['locale']
}
