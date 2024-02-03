import {
  GlobalMetadata,
  makeMetadataProviderFromSetterFactory,
  MetadataSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { TwitterCard } from './twitter-card'
import { TwitterCardsMetadata } from './twitter-cards-metadata'
import { makeTwitterCardsMetaDefinition } from './make-twitter-cards-meta-definition'

const TWITTER_CARDS_KEY: keyof TwitterCardsMetadata = `twitterCard`

export const makeTwitterCardsMetadataProvider = <Key extends keyof TwitterCard>(
  key: Key,
  opts: {
    // Twitter Card property name. Defaults to key
    p?: string
    // Global key. Defaults to nothing
    g?: keyof GlobalMetadata
    // Setter factory. Defaults to setting the property to the given value.
    s?: MetadataSetterFactory<TwitterCard[Key]>
  } = {},
): FactoryProvider =>
  makeMetadataProviderFromSetterFactory(
    opts.s ??
      ((metaService: NgxMetaMetaService) => (value: TwitterCard[Key]) =>
        metaService.set(
          makeTwitterCardsMetaDefinition(opts.p ?? key),
          value as string,
        )),
    {
      d: [NgxMetaMetaService],
      jP: [TWITTER_CARDS_KEY, key],
      g: opts.g,
    },
  )
