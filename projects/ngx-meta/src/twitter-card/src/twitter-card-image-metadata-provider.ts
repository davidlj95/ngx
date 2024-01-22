import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { makeTwitterCardMetaDefinition } from './make-twitter-card-meta-definition'
import { GLOBAL_IMAGE } from '@davidlj95/ngx-meta/core'

export const TWITTER_CARD_IMAGE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(GLOBAL_IMAGE, {
    g: GLOBAL_IMAGE,
    s: (metaService) => (value) => {
      metaService.set(
        makeTwitterCardMetaDefinition(GLOBAL_IMAGE),
        value?.url?.toString(),
      )
      metaService.set(
        makeTwitterCardMetaDefinition(GLOBAL_IMAGE, 'alt'),
        value?.alt,
      )
    },
  })
