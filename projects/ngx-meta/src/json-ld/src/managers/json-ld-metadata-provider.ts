import { DOCUMENT } from '@angular/common'
import {
  _headElementUpsertOrRemove,
  _HeadElementUpsertOrRemove,
  _isDefined,
  provideNgxMetaManager,
  withManagerDeps,
  withManagerOptions,
} from '@davidlj95/ngx-meta/core'
import { JsonLdMetadata } from './json-ld-metadata'

const KEY = 'jsonLd' satisfies keyof JsonLdMetadata
const SCRIPT_TYPE = 'application/ld+json'

/**
 * Manages the {@link JsonLdMetadata.jsonLd} metadata
 * @public
 */
export const JSON_LD_METADATA_PROVIDER = provideNgxMetaManager<
  JsonLdMetadata['jsonLd']
>(
  KEY,
  (headElementUpsertOrRemove: _HeadElementUpsertOrRemove, doc: Document) =>
    (jsonLd) => {
      let scriptElement: HTMLScriptElement | undefined
      if (_isDefined(jsonLd)) {
        scriptElement = doc.createElement('script')
        scriptElement.setAttribute('type', SCRIPT_TYPE)
        scriptElement.innerHTML = JSON.stringify(jsonLd)
      }
      headElementUpsertOrRemove(`script[type='${SCRIPT_TYPE}']`, scriptElement)
    },
  withManagerOptions(withManagerDeps(_headElementUpsertOrRemove(), DOCUMENT)),
)
