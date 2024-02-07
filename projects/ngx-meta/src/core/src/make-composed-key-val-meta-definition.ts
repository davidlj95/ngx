import { NgxMetaMetaDefinition } from './ngx-meta-meta.service'
import { makeKeyValMetaDefinition } from './make-key-val-meta-definition'

type MakeKeyValMetaDefinitionOpts = Parameters<
  typeof makeKeyValMetaDefinition
>[0]
type MakeComposedKeyValMetaDefinitionOpts = Omit<
  MakeKeyValMetaDefinitionOpts,
  'keyName'
> & {
  separator?: string
}

export const makeComposedKeyValMetaDefinition = (
  opts: MakeComposedKeyValMetaDefinitionOpts,
  names: ReadonlyArray<string>,
): NgxMetaMetaDefinition =>
  makeKeyValMetaDefinition({
    ...opts,
    keyName: names.join(
      opts.separator ?? _COMPOSED_KEY_VAL_META_DEFINITION_DEFAULT_SEPARATOR,
    ),
  })

/**
 * @internal
 */
export const _COMPOSED_KEY_VAL_META_DEFINITION_DEFAULT_SEPARATOR = ':'
