import {
  KEY_ATTRIBUTE_PROPERTY,
  makeComposedMetaProperty,
} from '@davidlj95/ngx-meta/core'

export const TWITTER_CARD_PROPERTY_PREFIX = 'twitter'

export const makeTwitterCardMetaProperty = (...names: string[]) =>
  makeComposedMetaProperty({ keyAttr: KEY_ATTRIBUTE_PROPERTY }, [
    TWITTER_CARD_PROPERTY_PREFIX,
    ...names,
  ])
