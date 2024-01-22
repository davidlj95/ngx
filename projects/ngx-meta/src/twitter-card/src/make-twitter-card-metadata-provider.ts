import {
  GlobalMetadata,
  makeMetadataProviderFromSetterFactory,
  MetadataSetterFactory,
  MetaService,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { TwitterCard } from './twitter-card'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { makeTwitterCardMetaProperty } from './make-twitter-card-meta-property'

const TWITTER_KEY: keyof TwitterCardMetadata = `twitterCard`

export const makeTwitterCardMetadataProvider = <Key extends keyof TwitterCard>(
  key: Key,
  opts: {
    // Twitter card property name. Defaults to key
    p?: string
    // Global key. Defaults to nothing
    g?: keyof GlobalMetadata
    // Setter factory. Defaults to setting the property to the given value.
    s?: MetadataSetterFactory<TwitterCard[typeof key]>
  } = {},
): FactoryProvider =>
  makeMetadataProviderFromSetterFactory(
    opts.s ??
      ((metaService) => (value: TwitterCard[typeof key]) =>
        metaService.set(makeTwitterCardMetaProperty(opts.p ?? key), value)),
    {
      d: [MetaService],
      jP: [TWITTER_KEY, key],
      g: opts.g,
    },
  )
