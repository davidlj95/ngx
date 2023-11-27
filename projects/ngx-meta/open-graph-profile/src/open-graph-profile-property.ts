import { _ComposableMetaCommandProperty } from '@davidlj95/ngx-meta/common'
import { _OpenGraphProperty } from '@davidlj95/ngx-meta/open-graph'

export class OpenGraphProfileProperty extends _ComposableMetaCommandProperty {
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
        separator: _OpenGraphProperty.SEPARATOR,
        keyAttribute: 'property',
        contentAttribute: 'content',
      },
      ...[_OpenGraphProperty.PREFIX, OpenGraphProfileProperty.PREFIX, ...names],
    )
    OpenGraphProfileProperty._all.add(this)
  }
}
