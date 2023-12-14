import { _ComposableMetaProperty } from '@davidlj95/ngx-meta/common'

export class OpenGraphProfileProperty extends _ComposableMetaProperty {
  public static PREFIX = `profile`

  private static _all: Set<OpenGraphProfileProperty> = new Set()
  public static ALL: ReadonlySet<OpenGraphProfileProperty> =
    OpenGraphProfileProperty._all

  // Basic
  public static FIRST_NAME = new this('first_name')
  public static LAST_NAME = new this('last_name')
  public static USERNAME = new this('username')
  public static GENDER = new this('gender')

  constructor(...names: ReadonlyArray<string>) {
    super(
      {
        separator: ':',
        keyAttribute: 'property',
      },
      ...['og', OpenGraphProfileProperty.PREFIX, ...names],
    )
    OpenGraphProfileProperty._all.add(this)
  }
}
