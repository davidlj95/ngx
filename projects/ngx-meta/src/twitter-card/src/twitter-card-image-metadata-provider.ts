import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { makeTwitterCardMetaDefinition } from './make-twitter-card-meta-definition'
import { _GLOBAL_IMAGE } from '@davidlj95/ngx-meta/core'

/**
 * Manages the {@link TwitterCard.image} metadata
 * @public
 */
export const TWITTER_CARD_IMAGE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(_GLOBAL_IMAGE, {
    g: _GLOBAL_IMAGE,
    s: (metaService) => (value) => {
      metaService.set(
        makeTwitterCardMetaDefinition(_GLOBAL_IMAGE),
        value?.url?.toString(),
      )
      metaService.set(
        makeTwitterCardMetaDefinition(_GLOBAL_IMAGE, 'alt'),
        value?.alt,
      )
    },
    m: true,
  })
