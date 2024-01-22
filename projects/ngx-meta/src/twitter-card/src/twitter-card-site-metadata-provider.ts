import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { TwitterCard } from './twitter-card'
import { TwitterCardSiteId, TwitterCardSiteUsername } from './twitter-card-site'
import { makeTwitterCardMetaDefinition } from './make-twitter-card-meta-definition'

const KEY: keyof TwitterCard = 'site'

export const TWITTER_CARD_SITE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, {
    s: (metaService) => (value) => {
      metaService.set(
        makeTwitterCardMetaDefinition(KEY),
        (value as TwitterCardSiteUsername | undefined)?.username,
      )
      metaService.set(
        makeTwitterCardMetaDefinition(KEY, 'id'),
        (value as TwitterCardSiteId | undefined)?.id,
      )
    },
  })
