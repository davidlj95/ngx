import { Provider } from '@angular/core'
import {
  TWITTER_CARD_CARD_METADATA_PROVIDER,
  TWITTER_CARD_CREATOR_METADATA_PROVIDER,
  TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER,
  TWITTER_CARD_IMAGE_METADATA_PROVIDER,
  TWITTER_CARD_SITE_METADATA_PROVIDER,
  TWITTER_CARD_TITLE_METADATA_PROVIDER,
} from '../managers'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/twitter-cards/ | Twitter Cards module}
 * metadata managers.
 *
 * @remarks
 *
 * This is the standalone, recommended API. Using this API is preferred.
 * However, you may also use {@link NgxMetaTwitterCardModule} as the Angular module-based equivalent API.
 *
 * @public
 */
export const provideNgxMetaTwitterCard = (): Provider => [
  TWITTER_CARD_CARD_METADATA_PROVIDER,
  TWITTER_CARD_SITE_METADATA_PROVIDER,
  TWITTER_CARD_CREATOR_METADATA_PROVIDER,
  TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER,
  TWITTER_CARD_TITLE_METADATA_PROVIDER,
  TWITTER_CARD_IMAGE_METADATA_PROVIDER,
]
