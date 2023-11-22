import { ComposableMetaCommandProperty } from '../common/meta-command/composable-meta-command-property'
import { OpenGraphProperty } from '../open-graph/open-graph-property'

export class OpenGraphProfileProperty extends ComposableMetaCommandProperty {
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
        separator: OpenGraphProperty.SEPARATOR,
        attribute: 'property',
      },
      ...[OpenGraphProperty.PREFIX, OpenGraphProfileProperty.PREFIX, ...names],
    )
    OpenGraphProfileProperty._all.add(this)
  }
}
