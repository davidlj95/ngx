import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { TwitterCard } from './twitter-card'

const KEY: keyof TwitterCard = 'description'

export const TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, { g: KEY })
