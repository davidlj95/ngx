import { makeTwitterCardMetadataProvider } from '../utils/make-twitter-card-metadata-provider'
import { TwitterCard } from '../types'
import { TwitterCardSiteId, TwitterCardSiteUsername } from './twitter-card-site'
import {
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { withTwitterCardNameAttribute } from '../utils/with-twitter-card-name-attribute'

const KEY = 'site' satisfies keyof TwitterCard

/**
 * Manages the {@link TwitterCard.site} metadata
 * @public
 */
export const TWITTER_CARD_SITE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(KEY, {
    s: (metaElementsService: NgxMetaElementsService) => (value) => {
      metaElementsService.set(
        withTwitterCardNameAttribute(KEY),
        withContentAttribute(
          (value as TwitterCardSiteUsername | undefined | null)?.username,
        ),
      )
      metaElementsService.set(
        withTwitterCardNameAttribute(KEY, 'id'),
        withContentAttribute(
          (value as TwitterCardSiteId | undefined | null)?.id,
        ),
      )
    },
  })
