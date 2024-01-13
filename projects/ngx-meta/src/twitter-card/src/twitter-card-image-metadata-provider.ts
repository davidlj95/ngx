import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { TwitterCard } from './twitter-card'
import { TwitterCardMetaProperty } from './twitter-card-meta-property'

const KEY: keyof TwitterCard = 'image'

export const TWITTER_CARD_IMAGE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, {
    g: KEY,
    s: (metaService) => (value) => {
      metaService.set(new TwitterCardMetaProperty(KEY), value?.url?.toString())
      metaService.set(new TwitterCardMetaProperty(KEY, 'alt'), value?.alt)
    },
  })
