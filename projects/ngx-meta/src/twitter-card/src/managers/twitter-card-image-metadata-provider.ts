import { makeTwitterCardMetadataProvider } from '../utils/make-twitter-card-metadata-provider'
import { makeTwitterCardMetaDefinition } from '../utils/make-twitter-card-meta-definition'
import {
  _GLOBAL_IMAGE,
  _maybeNonHttpUrlDevMessage,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { TwitterCard } from '../types'
import { MODULE_NAME } from '../module-name'

export const TWITTER_CARD_IMAGE_METADATA_SETTER_FACTORY =
  (metaService: NgxMetaMetaService) => (image: TwitterCard['image']) => {
    // Why not an `if`? Checkout https://github.com/davidlj95/ngx/pull/731
    ngDevMode &&
      _maybeNonHttpUrlDevMessage(image?.url, {
        module: MODULE_NAME,
        property: 'image',
        value: image?.url.toString(),
        link: 'https://devcommunity.x.com/t/card-error-unable-to-render-or-no-image-read-this-first/62736',
      })
    metaService.set(
      makeTwitterCardMetaDefinition(_GLOBAL_IMAGE),
      image?.url?.toString(),
    )
    metaService.set(
      makeTwitterCardMetaDefinition(_GLOBAL_IMAGE, 'alt'),
      image?.alt,
    )
  }

/**
 * Manages the {@link TwitterCard.image} metadata
 * @public
 */
export const TWITTER_CARD_IMAGE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(_GLOBAL_IMAGE, {
    g: _GLOBAL_IMAGE,
    s: TWITTER_CARD_IMAGE_METADATA_SETTER_FACTORY,
    m: true,
  })
