import { makeTwitterCardMetadataProvider } from '../utils/make-twitter-card-metadata-provider'
import { TwitterCard } from '../types'
import {
  TwitterCardCreatorId,
  TwitterCardCreatorUsername,
} from './twitter-card-creator'
import { makeTwitterCardMetaDefinition } from '../utils/make-twitter-card-meta-definition'
import { NgxMetaMetaService } from '@davidlj95/ngx-meta/core'

const KEY = 'creator' satisfies keyof TwitterCard

/**
 * Manages the {@link TwitterCard.creator} metadata
 * @public
 */
export const TWITTER_CARD_CREATOR_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, {
    s: (metaService: NgxMetaMetaService) => (value) => {
      metaService.set(
        makeTwitterCardMetaDefinition(KEY),
        (value as TwitterCardCreatorUsername | undefined | null)?.username,
      )
      metaService.set(
        makeTwitterCardMetaDefinition(KEY, 'id'),
        (value as TwitterCardCreatorId | undefined | null)?.id,
      )
    },
  })
