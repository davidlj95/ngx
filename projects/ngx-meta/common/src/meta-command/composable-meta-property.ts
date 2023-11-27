import { MetaProperty } from './meta-property'

export class ComposableMetaProperty extends MetaProperty {
  public readonly separator: string

  constructor(
    {
      separator,
      keyAttribute,
      contentAttribute,
    }: {
      separator: string
      keyAttribute: string
      contentAttribute?: string
    },
    ...names: ReadonlyArray<string>
  ) {
    super({
      keyAttribute,
      valueAttribute: contentAttribute,
      keyName: names.join(separator),
    })
    this.separator = separator
  }
}
