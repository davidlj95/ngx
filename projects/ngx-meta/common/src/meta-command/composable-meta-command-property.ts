import { MetaCommandProperty } from './meta-command-property'

export class ComposableMetaCommandProperty extends MetaCommandProperty {
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
