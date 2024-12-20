import {
  _provideNgxMetaModuleManager,
  _ProvideNgxMetaModuleManagerOptions,
  _withModuleManagerNameAttribute,
  withOptions,
} from '@davidlj95/ngx-meta/core'
import { TwitterCard, TwitterCardMetadata } from '../types'
import { withTwitterCardNameAttribute } from './with-twitter-card-name-attribute'

export const provideTwitterCardManager = <Key extends keyof TwitterCard>(
  key: Key,
  ...options: readonly _ProvideNgxMetaModuleManagerOptions<TwitterCard[Key]>[]
) =>
  _provideNgxMetaModuleManager<TwitterCard, Key>(
    key,
    ['twitterCard' satisfies keyof TwitterCardMetadata],
    withOptions(
      _withModuleManagerNameAttribute(withTwitterCardNameAttribute(key)),
      ...options,
    ),
  )
