import { ComposableMetaProperty } from '@davidlj95/ngx-meta/core'

export class OpenGraphMetaProperty extends ComposableMetaProperty {
  constructor(...names: string[]) {
    super({ keyAttribute: 'property' }, ...['og', ...names])
  }
}
