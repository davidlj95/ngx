import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { TwitterCard } from './twitter-card'

const KEY: keyof TwitterCard = 'card'

export const TWITTER_CARD_CARD_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY)
