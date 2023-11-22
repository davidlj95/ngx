import { MetaCommandProperty } from '../common/meta-command/meta-command-property'

export class StandardMetaProperty extends MetaCommandProperty {
  public static DESCRIPTION = new this('description')
  public static KEYWORDS = new this('keywords')
  public static AUTHOR = new this('author')
  public static GENERATOR = new this('generator')
  public static APPLICATION_NAME = new this('application-name')

  constructor(name: string) {
    super({ attribute: 'name', name })
  }
}
