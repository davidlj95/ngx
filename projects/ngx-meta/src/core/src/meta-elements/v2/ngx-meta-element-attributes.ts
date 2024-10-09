/**
 * Models a `<meta>` element HTML's attributes as a key / value map.
 *
 * Inspired on Angular's {@link https://angular.dev/api/platform-browser/MetaDefinition/ | MetaDefinition}
 *
 * Only difference is `http-equiv` property.
 *
 * @alpha
 */
export type NgxMetaElementAttributes = Partial<{
  charset: string
  content: string
  /**
   * In an Angular's {@link https://angular.dev/api/platform-browser/MetaDefinition/ | MetaDefinition},
   * `httpEquiv` would also be accepted. This way there's no need to quote the key property.
   *
   * But without `httpEquiv` there's no need to map attribute names. So one more bit of code less around.
   */
  'http-equiv': string
  id: string
  itemprop: string
  name: string
  property: string
  scheme: string
  url: string
}> & {
  [key: string]: string
}
