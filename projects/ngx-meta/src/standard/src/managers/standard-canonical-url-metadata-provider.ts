import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import {
  _GLOBAL_CANONICAL_URL,
  _headElementUpsertOrRemove,
  _HeadElementUpsertOrRemove,
  _isDefined,
  _maybeNonHttpUrlDevMessage,
  _urlResolver,
  _UrlResolver,
  MetadataSetter,
} from '@davidlj95/ngx-meta/core'
import { Standard } from '../types'
import { MODULE_NAME } from '../module-name'

export const STANDARD_CANONICAL_URL_SETTER_FACTORY: (
  headElementUpsertOrRemove: _HeadElementUpsertOrRemove,
  urlResolver: _UrlResolver,
) => MetadataSetter<Standard[typeof _GLOBAL_CANONICAL_URL]> =
  (headElementUpsertOrRemove, urlResolver) => (url) =>
    headElementUpsertOrRemove(SELECTOR, (doc) => {
      const resolvedUrl = urlResolver(url)
      ngDevMode &&
        _maybeNonHttpUrlDevMessage(resolvedUrl, {
          module: MODULE_NAME,
          property: _GLOBAL_CANONICAL_URL,
          value: resolvedUrl,
          link: 'https://stackoverflow.com/a/8467966/3263250',
          shouldInsteadOfMust: true,
        })
      if (!_isDefined(resolvedUrl)) {
        return
      }
      const linkElement = doc.createElement(LINK_TAG)
      linkElement.setAttribute(REL_ATTR, CANONICAL_VAL)
      linkElement.setAttribute('href', resolvedUrl)
      return linkElement
    })

/**
 * Manages the {@link Standard.canonicalUrl} metadata
 * @public
 */
export const STANDARD_CANONICAL_URL_METADATA_PROVIDER =
  makeStandardMetadataProvider(_GLOBAL_CANONICAL_URL, {
    g: _GLOBAL_CANONICAL_URL,
    s: STANDARD_CANONICAL_URL_SETTER_FACTORY,
    d: [_headElementUpsertOrRemove(), _urlResolver()],
  })

const LINK_TAG = 'link'
const REL_ATTR = 'rel'
const CANONICAL_VAL = 'canonical'
const SELECTOR = `${LINK_TAG}[${REL_ATTR}='${CANONICAL_VAL}']`
