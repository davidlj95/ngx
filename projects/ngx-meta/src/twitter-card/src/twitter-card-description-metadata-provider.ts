import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { _GLOBAL_DESCRIPTION } from '@davidlj95/ngx-meta/core'

export const TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(_GLOBAL_DESCRIPTION, {
    g: _GLOBAL_DESCRIPTION,
  })
