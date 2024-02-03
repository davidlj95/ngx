import { makeTwitterCardsMetadataProvider } from './make-twitter-cards-metadata-provider'
import { TwitterCard } from './twitter-card'
import {
  TwitterCardsSiteId,
  TwitterCardsSiteUsername,
} from './twitter-card-site'
import { makeTwitterCardsMetaDefinition } from './make-twitter-cards-meta-definition'

const KEY: keyof TwitterCard = 'site'

export const TWITTER_CARDS_SITE_METADATA_PROVIDER =
  makeTwitterCardsMetadataProvider(KEY, {
    s: (metaService) => (value) => {
      metaService.set(
        makeTwitterCardsMetaDefinition(KEY),
        (value as TwitterCardsSiteUsername | undefined)?.username,
      )
      metaService.set(
        makeTwitterCardsMetaDefinition(KEY, 'id'),
        (value as TwitterCardsSiteId | undefined)?.id,
      )
    },
  })
