export class MetaProperty {
  public readonly keyAttribute: string
  public readonly keyName: string
  public readonly valueAttribute: string

  constructor({
    keyAttribute,
    keyName,
    valueAttribute,
  }: {
    keyAttribute: string
    keyName: string
    valueAttribute?: string
  }) {
    this.keyAttribute = keyAttribute
    this.keyName = keyName
    this.valueAttribute = valueAttribute ?? 'content'
  }

  public get selector(): string {
    return `${this.keyAttribute}='${this.keyName}'`
  }
}
