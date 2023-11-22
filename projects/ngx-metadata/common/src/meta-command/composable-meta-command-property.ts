import { MetaCommandProperty } from './meta-command-property'

export class ComposableMetaCommandProperty extends MetaCommandProperty {
  public readonly separator: string

  constructor(
    {
      separator,
      attribute,
    }: {
      separator: string
      attribute: string
    },
    ...names: ReadonlyArray<string>
  ) {
    super({ attribute, name: names.join(separator) })
    this.separator = separator
  }
}
