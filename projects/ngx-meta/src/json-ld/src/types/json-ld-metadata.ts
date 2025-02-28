/**
 * Utility type to provide specific
 * {@link https://ngx-meta.dev/built-in-modules/json-ld/ | JSON-LD module}
 * metadata
 *
 * @public
 */

export interface JsonLdMetadata {
  /**
   * JSON-LD object (as a JSON object) to set in the page
   *
   * An array of JSON-LD objects can be given too. They will all be added inside the same `<script>` element.
   * As per {@link https://developers.google.com/search/docs/appearance/structured-data/sd-policies#individual-items
   * | Google's structured data general guidelines}.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link provideNgxMetaJsonLd}
   */
  readonly jsonLd?: object | readonly object[] | null
}
