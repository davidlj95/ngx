import { makeTwitterCardsMetadataProvider } from './make-twitter-cards-metadata-provider'
import { makeTwitterCardsMetaDefinition } from './make-twitter-cards-meta-definition'
import { GLOBAL_IMAGE } from '@davidlj95/ngx-meta/core'

export const TWITTER_CARDS_IMAGE_METADATA_PROVIDER =
  makeTwitterCardsMetadataProvider(GLOBAL_IMAGE, {
    g: GLOBAL_IMAGE,
    s: (metaService) => (value) => {
      metaService.set(
        makeTwitterCardsMetaDefinition(GLOBAL_IMAGE),
        value?.url?.toString(),
      )
      metaService.set(
        makeTwitterCardsMetaDefinition(GLOBAL_IMAGE, 'alt'),
        value?.alt,
      )
    },
  })
