import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { _GLOBAL_TITLE } from '@davidlj95/ngx-meta/core'

export const TWITTER_CARD_TITLE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(_GLOBAL_TITLE, { g: _GLOBAL_TITLE })
