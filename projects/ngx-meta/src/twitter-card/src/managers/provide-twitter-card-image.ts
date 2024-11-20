import {
  _GLOBAL_IMAGE,
  _maybeNonHttpUrlDevMessage,
  _withModuleManagerSameGlobalKey,
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
  withManagerObjectMerging,
} from '@davidlj95/ngx-meta/core'
import { MODULE_NAME } from '../module-name'
import { withTwitterCardNameAttribute } from '../utils/with-twitter-card-name-attribute'
import { provideTwitterCardManager } from '../utils/provide-twitter-card-manager'

/**
 * Manages the {@link TwitterCard.image} metadata
 * @public
 */
export const provideTwitterCardImage = () =>
  provideTwitterCardManager(
    _GLOBAL_IMAGE,
    _withModuleManagerSameGlobalKey(),
    withManagerObjectMerging(),
    _withModuleManagerSetterFactory(
      (metaElementsService: NgxMetaElementsService) => (image) => {
        /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
        if (ngDevMode) {
          _maybeNonHttpUrlDevMessage(image?.url, {
            module: MODULE_NAME,
            property: 'image',
            value: image?.url.toString(),
            link: 'https://devcommunity.x.com/t/card-error-unable-to-render-or-no-image-read-this-first/62736',
          })
        }
        metaElementsService.set(
          withTwitterCardNameAttribute(_GLOBAL_IMAGE),
          withContentAttribute(image?.url?.toString()),
        )
        metaElementsService.set(
          withTwitterCardNameAttribute(_GLOBAL_IMAGE, 'alt'),
          withContentAttribute(image?.alt),
        )
      },
    ),
  )

/**
 * {@inheritDoc provideTwitterCardImage}
 * @deprecated Use {@link provideTwitterCardImage} instead
 * @public
 */
export const TWITTER_CARD_IMAGE_METADATA_PROVIDER =
  /* @__PURE__ */
  provideTwitterCardImage()
