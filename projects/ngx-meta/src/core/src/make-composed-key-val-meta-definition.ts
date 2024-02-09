import { NgxMetaMetaDefinition } from './ngx-meta-meta.service'
import { makeKeyValMetaDefinition } from './make-key-val-meta-definition'

/**
 * Creates a key / value meta definition (see {@link makeKeyValMetaDefinition})
 * where the key is composed by several parts.
 *
 * @example
 * For instance, Open Graph's meta definition for property `og:title` (hence
 * element `<meta property='og:title'>`) could be created with:
 *
 * ```typescript
 * const ogTitleMetaDefinition = makeComposedKeyValMetaDefinition({
 *   keyAttr: 'property',
 *   separator: ':', // could be omitted, as it's the default one
 * }, ['og', 'title'])
 * ```
 *
 * @param options - Options to create the key/val meta definition.
 *                  See {@link makeKeyValMetaDefinition} options.
 *                  Accepts a `separator` argument, which defines how key names
 *                  will be joined together. Separator defaults to `:`
 * @param names - Names to create they key name
 * @public
 */
export const makeComposedKeyValMetaDefinition = (
  options: {
    keyAttr?: string
    valAttr?: string
    separator?: string
  },
  names: ReadonlyArray<string>,
): NgxMetaMetaDefinition =>
  makeKeyValMetaDefinition({
    ...options,
    keyName: names.join(
      options.separator ?? _COMPOSED_KEY_VAL_META_DEFINITION_DEFAULT_SEPARATOR,
    ),
  })

/**
 * @internal
 */
export const _COMPOSED_KEY_VAL_META_DEFINITION_DEFAULT_SEPARATOR = ':'
