import { MetaProperty } from '@davidlj95/ngx-meta/core'

export const makeStandardMetaProperty = (keyName: string) =>
  new MetaProperty({ keyName })
