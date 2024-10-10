import {
  GlobalMetadata,
  makeMetadataManagerProviderFromSetterFactory,
  MetadataResolverOptions,
  MetadataSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { TwitterCard, TwitterCardMetadata } from '../types'
import { withTwitterCardNameAttribute } from './with-twitter-card-name-attribute'

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
      ((metaElementsService: NgxMetaElementsService) =>
        (value: TwitterCard[Key]) =>
          metaElementsService.set(
            withTwitterCardNameAttribute(opts.p ?? key),
            withContentAttribute(value as string | null | undefined),
          )),
    {
      d: [NgxMetaElementsService],
      jP: [TWITTER_KEY, key],
      g: opts.g,
      m: opts.m,
    },
  )
