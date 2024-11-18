import { GlobalMetadata } from '@davidlj95/ngx-meta/core'
import { StandardThemeColorMetadata } from '../managers'

/**
 * {@link https://ngx-meta.dev/built-in-modules/standard/ | Standard module}
 * metadata values that can be set.
 *
 * @public
 */
export interface Standard {
  /**
   * Sets the `<title>` HTML element.
   *
   * Can be set with {@link GlobalMetadata.title}.
   *
   * @remarks
   *
   * Very relevant for SEO purposes.
   *
   * Recommendations:
   *
   *  - Should be unique
   *
   *  - Up to 50 ~ 60 characters
   *
   *  - Prefer a dash "-" as separator
   *
   * Provider:
   *
   * {@link STANDARD_TITLE_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title | MDN docs}
   *
   * - {@link https://html.spec.whatwg.org/multipage/semantics.html#the-title-element | HTML specs}
   *
   * - {@link https://moz.com/learn/seo/title-tag | Moz.com article about titles & SEO. Includes title preview on Google }
   *
   * - {@link https://yoast.com/page-titles-seo/ | Yoast article about titles & SEO}
   */
  readonly title?: GlobalMetadata['title']

  /**
   * Sets the `<meta name='description'>` HTML element.
   *
   * Can be set with {@link GlobalMetadata.description}.
   *
   * @remarks
   *
   * Very relevant for SEO purposes.
   *
   * Recommendations:
   *
   *  - Up to 155 characters.
   *
   * Provider:
   *
   * {@link STANDARD_DESCRIPTION_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://html.spec.whatwg.org/multipage/semantics.html#meta-description | MDN docs}
   *
   * - {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=description | HTML specs}
   *
   * - {@link https://yoast.com/meta-descriptions/ | Yoast article about meta descriptions}
   */
  readonly description?: GlobalMetadata['description']

  /**
   * Sets the `<meta name='author'>` HTML element.
   *
   * @remarks
   *
   * Doesn't seem to provide many benefits in terms of SEO.
   * Check out linked Moz.com article.
   *
   * Provider:
   *
   * {@link STANDARD_AUTHOR_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=author | MDN docs}
   *
   * - {@link https://html.spec.whatwg.org/multipage/semantics.html#meta-author | HTML specs}
   *
   * - {@link https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags | Moz.com article about meta tags}
   */
  readonly author?: string | null

  /**
   * Sets the `<meta name='keywords'>` HTML element.
   *
   * @remarks
   *
   * Doesn't seem to provide many benefits in terms of SEO. It's ignored by Google.
   * Check out linked articles for more information.
   *
   * Provider:
   *
   * {@link STANDARD_KEYWORDS_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=keywords | MDN docs}
   *
   * - {@link https://html.spec.whatwg.org/multipage/semantics.html#meta-keywords | HTML specs}
   *
   * - {@link https://yoast.com/meta-keywords/ | Yoast article about meta keywords}
   *
   * - {@link https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags | Moz.com article about meta tags}
   *
   * - {@link https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag | Google doesn't use meta keywords}
   */
  readonly keywords?: readonly string[] | null

  /**
   * Sets the `<meta name='generator'>` HTML tag.
   *
   * Includes the Angular version used to generate the page.
   *
   * @remarks
   *
   * Doesn't provide any benefits in terms of SEO.
   * Check out linked Moz.com article.
   *
   * Provider:
   *
   * {@link STANDARD_GENERATOR_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=generator | MDN docs}
   *
   * - {@link https://html.spec.whatwg.org/multipage/semantics.html#meta-generator | HTML specs}
   *
   * - {@link https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags | Moz.com article about meta tags}
   */
  readonly generator?: true | null

  /**
   * Sets the `<meta name='application-name'>` HTML element.
   *
   * Can be set with {@link GlobalMetadata.applicationName}.
   *
   * @remarks
   *
   * Not SEO related.
   *
   * Recommendations:
   *
   * - From MDN: simple web pages shouldn't define an application name.
   *
   * - From HTML specs: if the page is not a web application, the
   * `application-name` metadata name must not be used.
   *
   * Provider:
   *
   * {@link STANDARD_APPLICATION_NAME_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#:~:text=application%2Dname | MDN docs}
   *
   * - {@link https://html.spec.whatwg.org/multipage/semantics.html#meta-application-name | HTML specs}
   */
  readonly applicationName?: GlobalMetadata['applicationName']

  /**
   * Sets the `<link rel='canonical'>` HTML element.
   *
   * Can be set with {@link GlobalMetadata.canonicalUrl}.
   *
   * If {@link https://ngx-meta.dev/guides/url-resolution/ | URL resolution}
   * feature is enabled and a relative URL is provided, an absolute one will
   * be used as value after resolving it.
   *
   * @remarks
   *
   * Very relevant for SEO purposes.
   *
   * Recommendations:
   *
   *  - An absolute URL is preferred. Despite a relative URL is valid too.
   *    Checkout the linked StackOverflow answer below for more details.
   *
   * Provider:
   *
   * {@link STANDARD_CANONICAL_URL_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#canonical | MDN docs}
   *
   * - {@link https://html.spec.whatwg.org/multipage/links.html#link-type-canonical | HTML specs}
   *
   * - {@link https://support.google.com/webmasters/answer/10347851?hl=en | Google article about canonical URLs}
   *
   * - {@link https://stackoverflow.com/a/8467966/3263250 | Why absolute URLs are preferred (StackOverflow answer) }
   *
   * - {@link https://yoast.com/rel-canonical/ | Yoast article about canonical URLs}
   */
  readonly canonicalUrl?: GlobalMetadata['canonicalUrl']

  /**
   * Sets the `lang` attribute to the `<html>` element.
   *
   * Can be set with {@link GlobalMetadata.locale}.
   *
   * Value must be a valid language tag complying with BCP 47
   * For instance: "es" or "es-ES".
   *
   * @remarks
   *
   * Doesn't seem to provide any benefit in terms of SEO.
   *
   * Provider:
   *
   * {@link STANDARD_LOCALE_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang | MDN docs}
   *
   * - {@link https://html.spec.whatwg.org/multipage/dom.html#attr-lang | HTML specs}
   *
   * - {@link https://datatracker.ietf.org/doc/html/rfc5646 | RFC5646 / BCP47 }
   *
   * - {@link https://support.google.com/webmasters/thread/86451607?hl=en&msgid=86452356 | `lang` attribute & SEO post on Google's search console help}
   */
  readonly locale?: GlobalMetadata['locale']

  /**
   * Sets one or more `<meta name='theme-color'>` HTML elements.
   *
   * @remarks
   *
   * If set, color(s) must specify a valid CSS color.
   *
   * A `media` attribute can be set to specify a different color depending on
   * the context based on a CSS media query. For instance, to provide one color
   * for dark mode and another for light mode.
   *
   * You can use a `string` value to set one theme color as value. No `media`
   * attribute will be used then.
   *
   * You can also specify one or more colors and media queries combinations by
   * providing an array of {@link StandardThemeColorMetadataObject} specifying
   * the color and (optionally) a media query.
   *
   * Not related to SEO.
   *
   * Provider:
   *
   * {@link STANDARD_THEME_COLOR_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color | MDN docs}
   *
   * - {@link https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color | HTML specs}
   *
   * @example
   *
   * Providing just one theme color:
   *
   * ```typescript
   * const themeColor: Standard['themeColor'] = 'lightblue'
   * ```
   *
   * Providing multiple theme colors based on a media query:
   *
   * ```typescript
   * const themeColor: StandardThemeColorMetadata = [
   *   {color: 'darkblue', media: '(prefers-color-scheme: dark)'}
   *   {color: 'lightblue'}, // Default (when user does not prefer dark)
   * ]
   * ```
   */
  readonly themeColor?: StandardThemeColorMetadata | null
}
