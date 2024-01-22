import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { TwitterCard } from './twitter-card'
import {
  TwitterCardCreatorId,
  TwitterCardCreatorUsername,
} from './twitter-card-creator'
import { makeTwitterCardMetaDefinition } from './make-twitter-card-meta-definition'
import { NgxMetaMetaService } from '@davidlj95/ngx-meta/core'

const KEY: keyof TwitterCard = 'creator'

export const TWITTER_CARD_CREATOR_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, {
    s: (metaService: NgxMetaMetaService) => (value) => {
      metaService.set(
        makeTwitterCardMetaDefinition(KEY),
        (value as TwitterCardCreatorUsername | undefined)?.username,
      )
      metaService.set(
        makeTwitterCardMetaDefinition(KEY, 'id'),
        (value as TwitterCardCreatorId | undefined)?.id,
      )
    },
  })
