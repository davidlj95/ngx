import { TwitterCard } from '../types'
import {
  TwitterCardCreatorId,
  TwitterCardCreatorUsername,
} from './twitter-card-creator'
import {
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { withTwitterCardNameAttribute } from '../utils/with-twitter-card-name-attribute'
import { provideTwitterCardManager } from '../utils/provide-twitter-card-manager'

const KEY = 'creator' satisfies keyof TwitterCard

/**
 * Manages the {@link TwitterCard.creator} metadata
 * @public
 */
export const TWITTER_CARD_CREATOR_METADATA_PROVIDER = provideTwitterCardManager(
  KEY,
  _withModuleManagerSetterFactory(
    (metaElementsService: NgxMetaElementsService) => (creator) => {
      metaElementsService.set(
        withTwitterCardNameAttribute(KEY),
        withContentAttribute(
          (creator as TwitterCardCreatorUsername | undefined | null)?.username,
        ),
      )
      metaElementsService.set(
        withTwitterCardNameAttribute(KEY, 'id'),
        withContentAttribute(
          (creator as TwitterCardCreatorId | undefined | null)?.id,
        ),
      )
    },
  ),
)
