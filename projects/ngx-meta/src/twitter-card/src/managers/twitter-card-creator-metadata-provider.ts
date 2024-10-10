import { makeTwitterCardMetadataProvider } from '../utils/make-twitter-card-metadata-provider'
import { TwitterCard } from '../types'
import {
  TwitterCardCreatorId,
  TwitterCardCreatorUsername,
} from './twitter-card-creator'
import {
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { withTwitterCardNameAttribute } from '../utils/with-twitter-card-name-attribute'

const KEY = 'creator' satisfies keyof TwitterCard

/**
 * Manages the {@link TwitterCard.creator} metadata
 * @public
 */
export const TWITTER_CARD_CREATOR_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, {
    s: (metaElementsService: NgxMetaElementsService) => (value) => {
      metaElementsService.set(
        withTwitterCardNameAttribute(KEY),
        withContentAttribute(
          (value as TwitterCardCreatorUsername | undefined | null)?.username,
        ),
      )
      metaElementsService.set(
        withTwitterCardNameAttribute(KEY, 'id'),
        withContentAttribute(
          (value as TwitterCardCreatorId | undefined | null)?.id,
        ),
      )
    },
  })
