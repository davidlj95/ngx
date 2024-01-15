import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { GLOBAL_TITLE } from '@davidlj95/ngx-meta/core'

export const TWITTER_CARD_TITLE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(GLOBAL_TITLE, { g: GLOBAL_TITLE })
