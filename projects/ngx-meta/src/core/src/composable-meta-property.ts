import { MetaProperty } from './meta-property'

export class ComposableMetaProperty extends MetaProperty {
  public readonly separator: string

  constructor(
    {
      separator = ':',
      keyAttr,
      valAttr,
    }: {
      separator?: string
      keyAttr: string
      valAttr?: string
    },
    ...names: ReadonlyArray<string>
  ) {
    super({
      keyAttr: keyAttr,
      keyName: names.join(separator),
      valAttr: valAttr,
    })
    this.separator = separator
  }
}
