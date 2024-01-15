import { ComposableMetaProperty } from '@davidlj95/ngx-meta/core'

export class TwitterCardMetaProperty extends ComposableMetaProperty {
  constructor(...names: string[]) {
    super({ keyAttr: 'property' }, ...['twitter', ...names])
  }
}
