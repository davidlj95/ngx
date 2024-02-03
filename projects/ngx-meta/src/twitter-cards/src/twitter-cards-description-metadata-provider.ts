import { makeTwitterCardsMetadataProvider } from './make-twitter-cards-metadata-provider'
import { GLOBAL_DESCRIPTION } from '@davidlj95/ngx-meta/core'

export const TWITTER_CARDS_DESCRIPTION_METADATA_PROVIDER =
  makeTwitterCardsMetadataProvider(GLOBAL_DESCRIPTION, {
    g: GLOBAL_DESCRIPTION,
  })
