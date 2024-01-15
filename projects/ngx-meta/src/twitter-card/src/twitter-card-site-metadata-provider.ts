import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { TwitterCard } from './twitter-card'
import { TwitterCardSiteId, TwitterCardSiteUsername } from './twitter-card-site'
import { makeTwitterCardMetaProperty } from './make-twitter-card-meta-property'

const KEY: keyof TwitterCard = 'site'

export const TWITTER_CARD_SITE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, {
    s: (metaService) => (value) => {
      metaService.set(
        makeTwitterCardMetaProperty(KEY),
        (value as TwitterCardSiteUsername | undefined)?.username,
      )
      metaService.set(
        makeTwitterCardMetaProperty(KEY, 'id'),
        (value as TwitterCardSiteId | undefined)?.id,
      )
    },
  })
