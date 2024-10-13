import { makeTwitterCardMetadataProvider } from '../utils/make-twitter-card-metadata-provider'
import {
  _GLOBAL_IMAGE,
  _maybeNonHttpUrlDevMessage,
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { MODULE_NAME } from '../module-name'
import { withTwitterCardNameAttribute } from '../utils/with-twitter-card-name-attribute'

/**
 * Manages the {@link TwitterCard.image} metadata
 * @public
 */
export const TWITTER_CARD_IMAGE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(_GLOBAL_IMAGE, {
    g: _GLOBAL_IMAGE,
    s: (metaElementsService: NgxMetaElementsService) => (image) => {
      // Why not an `if`? Checkout https://github.com/davidlj95/ngx/pull/731
      ngDevMode &&
        _maybeNonHttpUrlDevMessage(image?.url, {
          module: MODULE_NAME,
          property: 'image',
          value: image?.url.toString(),
          link: 'https://devcommunity.x.com/t/card-error-unable-to-render-or-no-image-read-this-first/62736',
        })
      metaElementsService.set(
        withTwitterCardNameAttribute(_GLOBAL_IMAGE),
        withContentAttribute(image?.url?.toString()),
      )
      metaElementsService.set(
        withTwitterCardNameAttribute(_GLOBAL_IMAGE, 'alt'),
        withContentAttribute(image?.alt),
      )
    },
    m: true,
  })
