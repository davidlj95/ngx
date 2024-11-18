// noinspection JSDeprecatedSymbols

import {
  makeKeyValMetaDefinition,
  MakeKeyValMetaDefinitionOptions,
} from './make-key-val-meta-definition'
import { NgxMetaMetaDefinition } from './ngx-meta-meta-definition'

/**
 * Creates a key / value meta definition ({@link NgxMetaMetaDefinition})
 * where the key name is composed by several strings joined by a separator.
 *
 * See also {@link makeKeyValMetaDefinition}
 *
 * @example
 * For instance, Open Graph's meta definition for property `og:title` (hence
 * element `<meta property='og:title'>`) is composed of `og` and `title`.
 * Its {@link NgxMetaMetaDefinition} could be created with:
 *
 * ```typescript
 * const ogTitleMetaDefinition = makeComposedKeyValMetaDefinition(
 *   ['og', 'title'],
 *   {
 *     keyAttr: 'property',
 *     separator: ':', // Could be omitted, as it's the default one
 *   }
 * )
 * ```
 *
 * @deprecated Use {@link NgxMetaElementsService} APIs instead.
 *             See {@link https://ngx-meta.dev/guides/manage-your-custom-metadata/ | custom metadata guide} for more info
 *
 * @param names - Names to create they key name
 * @param options - Options object
 * @public
 */
/* istanbul ignore next - quite simple */
export const makeComposedKeyValMetaDefinition = (
  names: readonly string[],
  options: MakeComposedKeyValMetaDefinitionOptions = {},
): NgxMetaMetaDefinition =>
  makeKeyValMetaDefinition(names.join(options.separator ?? ':'), options)

/**
 * Options argument object for {@link makeComposedKeyValMetaDefinition}
 *
 * @deprecated Use {@link NgxMetaElementsService} APIs instead.
 *             See {@link https://ngx-meta.dev/guides/manage-your-custom-metadata/ | custom metadata guide} for more info
 *
 * @public
 */
export interface MakeComposedKeyValMetaDefinitionOptions
  extends MakeKeyValMetaDefinitionOptions {
  /**
   * Character to use to join key strings
   *
   * Default value is `:`
   */
  separator?: string
}
