import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { TwitterCard } from './twitter-card'
import {
  TwitterCardCreatorId,
  TwitterCardCreatorUsername,
} from './twitter-card-creator'
import { makeTwitterCardMetaProperty } from './make-twitter-card-meta-property'

const KEY: keyof TwitterCard = 'creator'

export const TWITTER_CARD_CREATOR_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, {
    s: (metaService) => (value) => {
      metaService.set(
        makeTwitterCardMetaProperty(KEY),
        (value as TwitterCardCreatorUsername | undefined)?.username,
      )
      metaService.set(
        makeTwitterCardMetaProperty(KEY, 'id'),
        (value as TwitterCardCreatorId | undefined)?.id,
      )
    },
  })
