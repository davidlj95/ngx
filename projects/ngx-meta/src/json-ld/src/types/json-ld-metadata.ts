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
   * @remarks
   *
   * Provider:
   *
   * {@link provideNgxMetaJsonLd}
   */
  readonly jsonLd?: object | null
}
