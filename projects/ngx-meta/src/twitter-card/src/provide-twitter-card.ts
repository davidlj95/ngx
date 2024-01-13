import { Provider } from '@angular/core'
import { TWITTER_CARD_CARD_METADATA_PROVIDER } from './twitter-card-card-metadata-provider'
import { TWITTER_CARD_SITE_METADATA_PROVIDER } from './twitter-card-site-metadata-provider'
import { TWITTER_CARD_CREATOR_METADATA_PROVIDER } from './twitter-card-creator-metadata-provider'
import { TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER } from './twitter-card-description-metadata-provider'
import { TWITTER_CARD_TITLE_METADATA_PROVIDER } from './twitter-card-title-metadata-provider'
import { TWITTER_CARD_IMAGE_METADATA_PROVIDER } from './twitter-card-image-metadata-provider'

export function provideTwitterCard(): Provider[] {
  return [
    TWITTER_CARD_CARD_METADATA_PROVIDER,
    TWITTER_CARD_SITE_METADATA_PROVIDER,
    TWITTER_CARD_CREATOR_METADATA_PROVIDER,
    TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER,
    TWITTER_CARD_TITLE_METADATA_PROVIDER,
    TWITTER_CARD_IMAGE_METADATA_PROVIDER,
  ]
}
