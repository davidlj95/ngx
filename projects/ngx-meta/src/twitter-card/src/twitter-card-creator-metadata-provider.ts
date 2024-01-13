import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { TwitterCard } from './twitter-card'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'
import {
  TwitterCardCreatorId,
  TwitterCardCreatorUsername,
} from './twitter-card-creator'

const KEY: keyof TwitterCard = 'creator'

export const TWITTER_CARD_CREATOR_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, {
    s: (metaService) => (value) => {
      metaService.set(
        new TwitterCardMetaProperty(KEY),
        (value as TwitterCardCreatorUsername | undefined)?.username,
      )
      metaService.set(
        new TwitterCardMetaProperty(KEY, 'id'),
        (value as TwitterCardCreatorId | undefined)?.id,
      )
    },
  })
