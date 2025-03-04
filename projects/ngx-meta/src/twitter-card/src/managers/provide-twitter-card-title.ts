import {
  _GLOBAL_TITLE,
  _titleFormatter,
  _withModuleManagerSameGlobalKey,
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  TitleFormatter,
  withContentAttribute,
  withManagerDeps,
} from '@davidlj95/ngx-meta/core'
import { provideTwitterCardManager } from '../utils/provide-twitter-card-manager'
import { withTwitterCardNameAttribute } from '../utils/with-twitter-card-name-attribute'

/**
 * Manages the {@link TwitterCard.title} metadata
 * @public
 */
export const provideTwitterCardTitle = () =>
  provideTwitterCardManager(
    _GLOBAL_TITLE,
    _withModuleManagerSameGlobalKey(),
    withManagerDeps(NgxMetaElementsService, _titleFormatter()),
    _withModuleManagerSetterFactory(
      (
        metaElementsService: NgxMetaElementsService,
        titleFormatter: TitleFormatter,
      ) =>
        (title) => {
          metaElementsService.set(
            withTwitterCardNameAttribute(_GLOBAL_TITLE),
            withContentAttribute(title ? titleFormatter(title) : title),
          )
        },
    ),
  )

/**
 * {@inheritDoc provideTwitterCardTitle}
 * @deprecated Use {@link provideTwitterCardTitle} instead
 * @public
 */
export const TWITTER_CARD_TITLE_METADATA_PROVIDER =
  /* @__PURE__ */
  provideTwitterCardTitle()
