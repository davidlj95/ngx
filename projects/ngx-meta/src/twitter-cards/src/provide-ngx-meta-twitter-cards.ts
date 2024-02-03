import { Provider } from '@angular/core'
import { TWITTER_CARDS_CARD_METADATA_PROVIDER } from './twitter-cards-card-metadata-provider'
import { TWITTER_CARDS_SITE_METADATA_PROVIDER } from './twitter-cards-site-metadata-provider'
import { TWITTER_CARDS_CREATOR_METADATA_PROVIDER } from './twitter-cards-creator-metadata-provider'
import { TWITTER_CARDS_DESCRIPTION_METADATA_PROVIDER } from './twitter-cards-description-metadata-provider'
import { TWITTER_CARDS_TITLE_METADATA_PROVIDER } from './twitter-cards-title-metadata-provider'
import { TWITTER_CARDS_IMAGE_METADATA_PROVIDER } from './twitter-cards-image-metadata-provider'

export const provideNgxMetaTwitterCards = (): Provider[] => [
  TWITTER_CARDS_CARD_METADATA_PROVIDER,
  TWITTER_CARDS_SITE_METADATA_PROVIDER,
  TWITTER_CARDS_CREATOR_METADATA_PROVIDER,
  TWITTER_CARDS_DESCRIPTION_METADATA_PROVIDER,
  TWITTER_CARDS_TITLE_METADATA_PROVIDER,
  TWITTER_CARDS_IMAGE_METADATA_PROVIDER,
]
