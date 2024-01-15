import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { GLOBAL_DESCRIPTION } from '@davidlj95/ngx-meta/core'

export const TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(GLOBAL_DESCRIPTION, { g: GLOBAL_DESCRIPTION })
