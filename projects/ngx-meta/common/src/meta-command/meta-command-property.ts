export class MetaCommandProperty {
  public readonly attribute: string
  public readonly name: string

  constructor({ attribute, name }: { attribute: string; name: string }) {
    this.attribute = attribute
    this.name = name
  }

  public get selector(): string {
    return `${this.attribute}='${this.name}'`
  }
}
