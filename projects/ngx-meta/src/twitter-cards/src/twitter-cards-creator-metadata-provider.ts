import { makeTwitterCardsMetadataProvider } from './make-twitter-cards-metadata-provider'
import { TwitterCard } from './twitter-card'
import {
  TwitterCardsCreatorId,
  TwitterCardsCreatorUsername,
} from './twitter-card-creator'
import { makeTwitterCardsMetaDefinition } from './make-twitter-cards-meta-definition'
import { NgxMetaMetaService } from '@davidlj95/ngx-meta/core'

const KEY: keyof TwitterCard = 'creator'

export const TWITTER_CARDS_CREATOR_METADATA_PROVIDER =
  makeTwitterCardsMetadataProvider(KEY, {
    s: (metaService: NgxMetaMetaService) => (value) => {
      metaService.set(
        makeTwitterCardsMetaDefinition(KEY),
        (value as TwitterCardsCreatorUsername | undefined)?.username,
      )
      metaService.set(
        makeTwitterCardsMetaDefinition(KEY, 'id'),
        (value as TwitterCardsCreatorId | undefined)?.id,
      )
    },
  })
