import { makeTwitterCardsMetadataProvider } from './make-twitter-cards-metadata-provider'
import { GLOBAL_TITLE } from '@davidlj95/ngx-meta/core'

export const TWITTER_CARDS_TITLE_METADATA_PROVIDER =
  makeTwitterCardsMetadataProvider(GLOBAL_TITLE, { g: GLOBAL_TITLE })
