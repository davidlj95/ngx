import { MetaProperty } from '@davidlj95/ngx-meta/core'

export class StandardMetaProperty extends MetaProperty {
  constructor(keyName: string) {
    super({ keyName })
  }
}
