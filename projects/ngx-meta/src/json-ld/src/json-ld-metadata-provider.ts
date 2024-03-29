import { DOCUMENT } from '@angular/common'
import {
  _HEAD_ELEMENT_UPSERT_OR_REMOVE,
  _HeadElementUpsertOrRemove,
  makeMetadataManagerProviderFromSetterFactory,
  MetadataSetterFactory,
} from '@davidlj95/ngx-meta/core'
import { JsonLdMetadata } from './json-ld-metadata'

/**
 * @internal
 */
const _JSON_LD_KEY: keyof JsonLdMetadata = 'jsonLd'
const SCRIPT_TYPE = 'application/ld+json'

/**
 * @internal
 */
export const __JSON_LD_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  JsonLdMetadata[typeof _JSON_LD_KEY]
> =
  (headElementUpsertOrRemove: _HeadElementUpsertOrRemove, doc: Document) =>
  (jsonLd) => {
    let scriptElement: HTMLScriptElement | undefined
    if (jsonLd !== null && jsonLd !== undefined) {
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
    __JSON_LD_METADATA_SETTER_FACTORY,
    {
      d: [_HEAD_ELEMENT_UPSERT_OR_REMOVE, DOCUMENT],
      jP: [_JSON_LD_KEY],
    },
  )
