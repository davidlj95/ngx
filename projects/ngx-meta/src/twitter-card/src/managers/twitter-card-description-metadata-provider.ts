import { makeTwitterCardMetadataProvider } from '../utils/make-twitter-card-metadata-provider'
import {
  _GLOBAL_DESCRIPTION,
  _maybeTooLongDevMessage,
} from '@davidlj95/ngx-meta/core'
import { TwitterCard } from '../types'
import { makeTwitterCardMetaDefinition } from '../utils/make-twitter-card-meta-definition'
import { _MODULE_NAME } from '../module-name'

/**
 * Manages the {@link TwitterCard.description} metadata
 * @public
 */
export const TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(_GLOBAL_DESCRIPTION, {
    g: _GLOBAL_DESCRIPTION,
    s: (metaService) => (description: TwitterCard['description']) => {
      /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
      if (ngDevMode) {
        _maybeTooLongDevMessage(description, 200, {
          module: _MODULE_NAME,
          property: _GLOBAL_DESCRIPTION,
          value: description,
          link: 'https://developer.x.com/en/docs/twitter-for-websites/cards/overview/markup#:~:text=n/a-,twitter%3Adescription,-Description%20of%20content',
        })
      }
      metaService.set(
        makeTwitterCardMetaDefinition(_GLOBAL_DESCRIPTION),
        description,
      )
    },
  })
