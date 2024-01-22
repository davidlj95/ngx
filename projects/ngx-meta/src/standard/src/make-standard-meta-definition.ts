import { makeKeyValMetaDefinition } from '@davidlj95/ngx-meta/core'

export const makeStandardMetaDefinition = (keyName: string) =>
  makeKeyValMetaDefinition({ keyName })
