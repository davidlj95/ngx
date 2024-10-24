import { DOCUMENT } from '@angular/common'
import {
  _headElementUpsertOrRemove,
  _HeadElementUpsertOrRemove,
  _isDefined,
  provideNgxMetaManager,
  withManagerDeps,
  withOptions,
} from '@davidlj95/ngx-meta/core'
import { JsonLdMetadata } from '../types'

const KEY = 'jsonLd' satisfies keyof JsonLdMetadata
const SCRIPT_TYPE = 'application/ld+json'

/**
 * Manages the {@link JsonLdMetadata.jsonLd} metadata by placing it into the page's `<head>`
 * @public
 */
export const provideJsonLdInHead = () =>
  provideNgxMetaManager<JsonLdMetadata['jsonLd']>(
    KEY,
    (headElementUpsertOrRemove: _HeadElementUpsertOrRemove, doc: Document) =>
      (jsonLd) => {
        let scriptElement: HTMLScriptElement | undefined
        if (_isDefined(jsonLd)) {
          scriptElement = doc.createElement('script')
          scriptElement.setAttribute('type', SCRIPT_TYPE)
          scriptElement.innerHTML = JSON.stringify(jsonLd)
        }
        headElementUpsertOrRemove(
          `script[type='${SCRIPT_TYPE}']`,
          scriptElement,
        )
      },
    withOptions(withManagerDeps(_headElementUpsertOrRemove(), DOCUMENT)),
  )
