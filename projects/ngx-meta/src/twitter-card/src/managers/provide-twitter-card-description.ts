import {
  _GLOBAL_DESCRIPTION,
  _maybeTooLongDevMessage,
  _withModuleManagerSameGlobalKey,
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { MODULE_NAME } from '../module-name'
import { withTwitterCardNameAttribute } from '../utils/with-twitter-card-name-attribute'
import { provideTwitterCardManager } from '../utils/provide-twitter-card-manager'

/**
 * Manages the {@link TwitterCard.description} metadata
 * @public
 */
export const provideTwitterCardDescription = () =>
  provideTwitterCardManager(
    _GLOBAL_DESCRIPTION,
    _withModuleManagerSameGlobalKey(),
    _withModuleManagerSetterFactory(
      (metaElementsService: NgxMetaElementsService) => (description) => {
        /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
        if (ngDevMode) {
          _maybeTooLongDevMessage(description, 200, {
            module: MODULE_NAME,
            property: _GLOBAL_DESCRIPTION,
            value: description,
            link: 'https://developer.x.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=n/a-,twitter%3Adescription,-Description%20of%20content',
          })
        }
        metaElementsService.set(
          withTwitterCardNameAttribute(_GLOBAL_DESCRIPTION),
          withContentAttribute(description),
        )
      },
    ),
  )
