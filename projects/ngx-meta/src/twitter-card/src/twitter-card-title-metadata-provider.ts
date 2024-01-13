import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { TwitterCard } from './twitter-card'

const KEY: keyof TwitterCard = 'title'

export const TWITTER_CARD_TITLE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, { g: KEY })
