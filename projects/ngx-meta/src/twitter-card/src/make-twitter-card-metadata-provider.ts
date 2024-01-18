import {
  GlobalMetadataKey,
  makeMetadata,
  MetadataSetterFactory,
  MetaService,
  provideMetadataFactory,
  StringKeyOf,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { TwitterCard } from './twitter-card'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { makeTwitterCardMetaProperty } from './make-twitter-card-meta-property'

const TWITTER_KEY: keyof TwitterCardMetadata = `twitterCard`

export const makeTwitterCardMetadataProvider = <
  Key extends StringKeyOf<TwitterCard>,
>(
  key: Key,
  opts: {
    // Twitter card property name. Defaults to key
    p?: string
    // Global key. Defaults to nothing
    g?: GlobalMetadataKey
    // Setter factory. Defaults to setting the property to the given value.
    s?: MetadataSetterFactory<TwitterCard[typeof key]>
  } = {},
): FactoryProvider =>
  provideMetadataFactory(
    makeMetadata([TWITTER_KEY, key], opts.g),
    opts.s ??
      ((metaService) => (value: TwitterCard[typeof key]) =>
        metaService.set(makeTwitterCardMetaProperty(opts.p ?? key), value)),
    [MetaService],
  )
