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
      keyName: names.join(separator),
      contentAttribute,
    })
    this.separator = separator
  }
}
