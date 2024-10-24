import {
  _GLOBAL_CANONICAL_URL,
  _headElementUpsertOrRemove,
  _isDefined,
  _maybeNonHttpUrlDevMessage,
  _urlResolver,
  _withModuleManagerSameGlobalKey,
  _withModuleManagerSetterFactory,
  withManagerDeps,
} from '@davidlj95/ngx-meta/core'
import { DOCUMENT } from '@angular/common'
import { MODULE_NAME } from '../module-name'
import { provideStandardManager } from '../utils/provide-standard-manager'

/**
 * Manages the {@link Standard.canonicalUrl} metadata
 * @public
 */
export const provideStandardCanonicalUrl = () =>
  provideStandardManager(
    _GLOBAL_CANONICAL_URL,
    _withModuleManagerSameGlobalKey(),
    withManagerDeps(_headElementUpsertOrRemove(), DOCUMENT, _urlResolver()),
    _withModuleManagerSetterFactory(
      (headElementUpsertOrRemove, doc, urlResolver) => (url) => {
        const resolvedUrl = urlResolver(url)
        /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
        if (ngDevMode) {
          _maybeNonHttpUrlDevMessage(resolvedUrl, {
            module: MODULE_NAME,
            property: _GLOBAL_CANONICAL_URL,
            value: resolvedUrl,
            link: 'https://stackoverflow.com/a/8467966/3263250',
            shouldInsteadOfMust: true,
          })
        }
        let linkElement: HTMLLinkElement | undefined
        if (_isDefined(resolvedUrl)) {
          linkElement = doc.createElement(LINK_TAG)
          linkElement!.setAttribute(REL_ATTR, CANONICAL_VAL)
          linkElement!.setAttribute('href', resolvedUrl)
        }
        headElementUpsertOrRemove(SELECTOR, linkElement)
      },
    ),
  )

const LINK_TAG = 'link'
const REL_ATTR = 'rel'
const CANONICAL_VAL = 'canonical'
const SELECTOR = `${LINK_TAG}[${REL_ATTR}='${CANONICAL_VAL}']`
