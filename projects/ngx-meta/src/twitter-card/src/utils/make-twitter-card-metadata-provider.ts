import {
  GlobalMetadata,
  makeMetadataManagerProviderFromSetterFactory,
  MetadataResolverOptions,
  MetadataSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { TwitterCard, TwitterCardMetadata } from '../types'
import { makeTwitterCardMetaDefinition } from './make-twitter-card-meta-definition'

const TWITTER_KEY: keyof TwitterCardMetadata = `twitterCard`
export const TWITTER_KEY_KEBAB_CASE = 'twitter-card'

export const makeTwitterCardMetadataProvider = <Key extends keyof TwitterCard>(
  key: Key,
  opts: {
    // Twitter card property name. Defaults to key
    p?: string
    // Global key. Defaults to nothing
    g?: keyof GlobalMetadata
    // Setter factory. Defaults to setting the property to the given value.
    s?: MetadataSetterFactory<TwitterCard[Key]>
    // Object merge
    m?: MetadataResolverOptions['objectMerge']
  } = {},
): FactoryProvider =>
  makeMetadataManagerProviderFromSetterFactory(
    opts.s ??
      ((metaService: NgxMetaMetaService) => (value: TwitterCard[Key]) =>
        metaService.set(
          makeTwitterCardMetaDefinition(opts.p ?? key),
          value as string,
        )),
    {
      d: [NgxMetaMetaService],
      jP: [TWITTER_KEY, key],
      g: opts.g,
      m: opts.m,
    },
  )
