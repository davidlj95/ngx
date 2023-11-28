import { _ComposableMetaProperty } from '@davidlj95/ngx-meta/common'

export class OpenGraphProperty extends _ComposableMetaProperty {
  public static SEPARATOR = ':'
  public static PREFIX = `og`

  private static IMAGE_NAME = 'image'
  private static _all: Set<OpenGraphProperty> = new Set()
  public static ALL: ReadonlySet<OpenGraphProperty> = OpenGraphProperty._all
  // Basic
  public static TITLE = new this('title')
  public static TYPE = new this('type')
  public static IMAGE = new this(this.IMAGE_NAME)
  public static URL = new this('url')
  // Optional
  public static DESCRIPTION = new this('description')
  public static LOCALE = new this('locale')
  public static SITE_NAME = new this('site_name')
  // Structured
  public static IMAGE_ALT = new this(this.IMAGE_NAME, 'alt')
  public static IMAGE_SECURE_URL = new this(this.IMAGE_NAME, 'secure_url')
  public static IMAGE_TYPE = new this(this.IMAGE_NAME, 'type')
  public static IMAGE_WIDTH = new this(this.IMAGE_NAME, 'width')
  public static IMAGE_HEIGHT = new this(this.IMAGE_NAME, 'height')

  constructor(...names: ReadonlyArray<string>) {
    super(
      {
        separator: OpenGraphProperty.SEPARATOR,
        keyAttribute: 'property',
      },
      ...[OpenGraphProperty.PREFIX, ...names],
    )
    OpenGraphProperty._all.add(this)
  }

  public static images(): ReadonlyArray<OpenGraphProperty> {
    return [...this.ALL].filter(({ keyName }) =>
      keyName.startsWith(this.IMAGE.keyName),
    )
  }
}
