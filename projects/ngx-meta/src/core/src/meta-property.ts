export class MetaProperty {
  public readonly keyAttribute: string
  public readonly keyName: string
  public readonly contentAttribute: string

  constructor({
    keyAttribute,
    keyName,
    contentAttribute,
  }: {
    keyAttribute?: string
    keyName: string
    contentAttribute?: string
  }) {
    this.keyAttribute = keyAttribute ?? 'name'
    this.keyName = keyName
    this.contentAttribute = contentAttribute ?? 'content'
  }

  public get selector(): string {
    return `${this.keyAttribute}='${this.keyName}'`
  }
}
