import { Provider } from '@angular/core'
import { TWITTER_CARD_CARD_METADATA_PROVIDER } from './twitter-card-card-metadata-provider'
import { TWITTER_CARD_SITE_METADATA_PROVIDER } from './twitter-card-site-metadata-provider'
import { TWITTER_CARD_CREATOR_METADATA_PROVIDER } from './twitter-card-creator-metadata-provider'
import { TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER } from './twitter-card-description-metadata-provider'
import { TWITTER_CARD_TITLE_METADATA_PROVIDER } from './twitter-card-title-metadata-provider'
import { TWITTER_CARD_IMAGE_METADATA_PROVIDER } from './twitter-card-image-metadata-provider'

/**
 * Adds {@link https://ngx-meta.dev/built-in-modules/twitter-cards/ | Twitter Cards module}
 * metadata managers
 *
 * For module-based apps, use {@link NgxMetaTwitterCardModule} instead
 *
 * @public
 */
export const provideNgxMetaTwitterCard = (): Provider[] => [
  TWITTER_CARD_CARD_METADATA_PROVIDER,
  TWITTER_CARD_SITE_METADATA_PROVIDER,
  TWITTER_CARD_CREATOR_METADATA_PROVIDER,
  TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER,
  TWITTER_CARD_TITLE_METADATA_PROVIDER,
  TWITTER_CARD_IMAGE_METADATA_PROVIDER,
]
