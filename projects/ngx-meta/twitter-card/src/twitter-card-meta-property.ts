import { _ComposableMetaProperty } from '@davidlj95/ngx-meta/common'

export class TwitterCardMetaProperty extends _ComposableMetaProperty {
  public static SEPARATOR = ':'
  public static PREFIX = `twitter`

  private static IMAGE_NAME = 'image'
  private static SITE_NAME = 'site'
  private static CREATOR_NAME = 'creator'
  private static _all: Set<TwitterCardMetaProperty> = new Set()
  public static ALL: ReadonlySet<TwitterCardMetaProperty> =
    TwitterCardMetaProperty._all

  // Basic
  public static CARD = new this('card')
  public static SITE = new this(this.SITE_NAME)
  public static SITE_ID = new this(this.SITE_NAME, 'id')
  public static CREATOR = new this(this.CREATOR_NAME)
  public static CREATOR_ID = new this(this.CREATOR_NAME, 'id')
  public static TITLE = new this('title')
  public static DESCRIPTION = new this('description')
  public static IMAGE = new this(this.IMAGE_NAME)
  public static IMAGE_ALT = new this(this.IMAGE_NAME, 'alt')

  constructor(...names: ReadonlyArray<string>) {
    super(
      {
        separator: TwitterCardMetaProperty.SEPARATOR,
        keyAttribute: 'name',
      },
      ...[TwitterCardMetaProperty.PREFIX, ...names],
    )
    TwitterCardMetaProperty._all.add(this)
  }

  public static images() {
    return [...this.ALL].filter(({ keyName }) =>
      keyName.startsWith(this.IMAGE.keyName),
    )
  }
}
