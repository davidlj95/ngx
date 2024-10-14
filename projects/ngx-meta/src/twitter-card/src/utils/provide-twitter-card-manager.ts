import {
  _provideNgxMetaModuleManager,
  _ProvideNgxMetaModuleManagerOptions,
  _withModuleManagerNameAttribute,
  withOptions,
} from '@davidlj95/ngx-meta/core'
import { TwitterCard, TwitterCardMetadata } from '../types'
import { withTwitterCardNameAttribute } from './with-twitter-card-name-attribute'

export const TWITTER_CARD_KEY =
  'twitterCard' satisfies keyof TwitterCardMetadata

export const provideTwitterCardManager = <Key extends keyof TwitterCard>(
  key: Key,
  ...options: ReadonlyArray<
    _ProvideNgxMetaModuleManagerOptions<TwitterCard[Key]>
  >
) =>
  _provideNgxMetaModuleManager<TwitterCard, Key>(
    key,
    [TWITTER_CARD_KEY],
    withOptions(
      _withModuleManagerNameAttribute(withTwitterCardNameAttribute(key)),
      ...options,
    ),
  )
