/**
 * Models a `<meta>` element HTML's attributes as a key / value map.
 *
 * Almost equivalent to Angular's {@link https://angular.dev/api/platform-browser/MetaDefinition/ | MetaDefinition}
 *
 * Only difference is `http-equiv` property. In an Angular's
 * {@link https://angular.dev/api/platform-browser/MetaDefinition/ | MetaDefinition}, `httpEquiv` would also be
 * accepted. This way there's no need to quote the key property.
 * But without `httpEquiv` there's no need to map attribute names. So one bit of code less.
 *
 * @alpha
 */
export type NgxMetaElementAttributes = Partial<{
  charset: string
  content: string
  'http-equiv': string
  id: string
  itemprop: string
  name: string
  property: string
  scheme: string
  url: string
  media: string
}> & {
  [key: string]: string
}
