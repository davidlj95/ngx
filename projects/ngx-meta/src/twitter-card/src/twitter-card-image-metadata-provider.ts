import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { TwitterCard } from './twitter-card'
import { makeTwitterCardMetaProperty } from './make-twitter-card-meta-property'

const KEY: keyof TwitterCard = 'image'

export const TWITTER_CARD_IMAGE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, {
    g: KEY,
    s: (metaService) => (value) => {
      metaService.set(makeTwitterCardMetaProperty(KEY), value?.url?.toString())
      metaService.set(makeTwitterCardMetaProperty(KEY, 'alt'), value?.alt)
    },
  })
