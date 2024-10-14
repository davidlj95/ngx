import { TwitterCard } from '../types'
import { TwitterCardSiteId, TwitterCardSiteUsername } from './twitter-card-site'
import {
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { withTwitterCardNameAttribute } from '../utils/with-twitter-card-name-attribute'
import { provideTwitterCardManager } from '../utils/provide-twitter-card-manager'

const KEY = 'site' satisfies keyof TwitterCard

/**
 * Manages the {@link TwitterCard.site} metadata
 * @public
 */
export const TWITTER_CARD_SITE_METADATA_PROVIDER = provideTwitterCardManager(
  KEY,
  _withModuleManagerSetterFactory(
    (metaElementsService: NgxMetaElementsService) => (site) => {
      metaElementsService.set(
        withTwitterCardNameAttribute(KEY),
        withContentAttribute(
          (site as TwitterCardSiteUsername | undefined | null)?.username,
        ),
      )
      metaElementsService.set(
        withTwitterCardNameAttribute(KEY, 'id'),
        withContentAttribute(
          (site as TwitterCardSiteId | undefined | null)?.id,
        ),
      )
    },
  ),
)
