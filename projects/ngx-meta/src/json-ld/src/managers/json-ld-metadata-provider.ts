import { DOCUMENT } from '@angular/common'
import {
  _headElementUpsertOrRemove,
  _HeadElementUpsertOrRemove,
  _isDefined,
  makeMetadataManagerProviderFromSetterFactory,
  MetadataSetterFactory,
} from '@davidlj95/ngx-meta/core'
import { JsonLdMetadata } from './json-ld-metadata'

const KEY = 'jsonLd' satisfies keyof JsonLdMetadata
const SCRIPT_TYPE = 'application/ld+json'

export const JSON_LD_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  JsonLdMetadata[typeof KEY]
> =
  (headElementUpsertOrRemove: _HeadElementUpsertOrRemove, doc: Document) =>
  (jsonLd) => {
    let scriptElement: HTMLScriptElement | undefined
    if (_isDefined(jsonLd)) {
      scriptElement = doc.createElement('script')
      scriptElement.setAttribute('type', SCRIPT_TYPE)
      scriptElement.innerHTML = JSON.stringify(jsonLd)
    }
    headElementUpsertOrRemove(`script[type='${SCRIPT_TYPE}']`, scriptElement)
  }

/**
 * Manages the {@link JsonLdMetadata.jsonLd} metadata
 * @public
 */
export const JSON_LD_METADATA_PROVIDER =
  makeMetadataManagerProviderFromSetterFactory(
    JSON_LD_METADATA_SETTER_FACTORY,
    {
      d: [_headElementUpsertOrRemove(), DOCUMENT],
      jP: [KEY],
    },
  )
