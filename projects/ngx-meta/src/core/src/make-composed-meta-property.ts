import { MetaProperty } from './meta-property'

type MetaPropertyOpts = ConstructorParameters<typeof MetaProperty>[0]
type ComposedMetaPropertyOpts = Omit<MetaPropertyOpts, 'keyName'> & {
  separator?: string
}

export const makeComposedMetaProperty = (
  opts: ComposedMetaPropertyOpts,
  names: ReadonlyArray<string>,
) =>
  new MetaProperty({
    ...opts,
    keyName: names.join(
      opts.separator ?? DEFAULT_COMPOSED_META_PROPERTY_SEPARATOR,
    ),
  })

export const DEFAULT_COMPOSED_META_PROPERTY_SEPARATOR = ':'
