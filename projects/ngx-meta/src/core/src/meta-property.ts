export class MetaProperty {
  public readonly keyAttr: string
  public readonly keyName: string
  public readonly valAttr: string

  constructor({
    keyAttr,
    keyName,
    valAttr,
  }: {
    keyAttr?: string
    keyName: string
    valAttr?: string
  }) {
    this.keyAttr = keyAttr ?? KEY_ATTRIBUTE_NAME
    this.keyName = keyName
    this.valAttr = valAttr ?? VAL_ATTRIBUTE_CONTENT
  }

  public get selector(): string {
    return `${this.keyAttr}='${this.keyName}'`
  }
}

export const KEY_ATTRIBUTE_NAME = 'name'
export const KEY_ATTRIBUTE_PROPERTY = 'property'
export const VAL_ATTRIBUTE_CONTENT = 'content'
