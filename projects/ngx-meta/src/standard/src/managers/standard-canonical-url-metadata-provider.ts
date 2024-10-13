import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import {
  _GLOBAL_CANONICAL_URL,
  _headElementUpsertOrRemove,
  _isDefined,
  _maybeNonHttpUrlDevMessage,
  _urlResolver,
} from '@davidlj95/ngx-meta/core'
import { DOCUMENT } from '@angular/common'
import { MODULE_NAME } from '../module-name'

/**
 * Manages the {@link Standard.canonicalUrl} metadata
 * @public
 */
export const STANDARD_CANONICAL_URL_METADATA_PROVIDER =
  makeStandardMetadataProvider(_GLOBAL_CANONICAL_URL, {
    g: _GLOBAL_CANONICAL_URL,
    s: (headElementUpsertOrRemove, doc, urlResolver) => (url) => {
      const resolvedUrl = urlResolver(url)
      ngDevMode &&
        _maybeNonHttpUrlDevMessage(resolvedUrl, {
          module: MODULE_NAME,
          property: _GLOBAL_CANONICAL_URL,
          value: resolvedUrl,
          link: 'https://stackoverflow.com/a/8467966/3263250',
          shouldInsteadOfMust: true,
        })
      let linkElement: HTMLLinkElement | undefined
      if (_isDefined(resolvedUrl)) {
        linkElement = doc.createElement(LINK_TAG)
        linkElement!.setAttribute(REL_ATTR, CANONICAL_VAL)
        linkElement!.setAttribute('href', resolvedUrl)
      }
      headElementUpsertOrRemove(SELECTOR, linkElement)
    },
    d: [_headElementUpsertOrRemove(), DOCUMENT, _urlResolver()],
  })

const LINK_TAG = 'link'
const REL_ATTR = 'rel'
const CANONICAL_VAL = 'canonical'
const SELECTOR = `${LINK_TAG}[${REL_ATTR}='${CANONICAL_VAL}']`
