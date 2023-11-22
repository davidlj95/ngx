import { _MetaCommandProperty } from 'ngx-metadata/common'

export class StandardMetaProperty extends _MetaCommandProperty {
  public static DESCRIPTION = new this('description')
  public static KEYWORDS = new this('keywords')
  public static AUTHOR = new this('author')
  public static GENERATOR = new this('generator')
  public static APPLICATION_NAME = new this('application-name')

  constructor(name: string) {
    super({ attribute: 'name', name })
  }
}
