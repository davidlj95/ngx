import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { TwitterCard } from './twitter-card'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'
import { TwitterCardSiteId, TwitterCardSiteUsername } from './twitter-card-site'

const KEY: keyof TwitterCard = 'site'

export const TWITTER_CARD_SITE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, {
    s: (metaService) => (value) => {
      metaService.set(
        new TwitterCardMetaProperty(KEY),
        (value as TwitterCardSiteUsername | undefined)?.username,
      )
      metaService.set(
        new TwitterCardMetaProperty(KEY, 'id'),
        (value as TwitterCardSiteId | undefined)?.id,
      )
    },
  })
