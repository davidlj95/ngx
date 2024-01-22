import { DOCUMENT } from '@angular/common'
import {
  HEAD_ELEMENT_UPSERT_OR_REMOVE,
  HeadElementUpsertOrRemove,
  makeMetadataProviderFromSetterFactory,
  MetadataSetterFactory,
} from '@davidlj95/ngx-meta/core'
import { JsonLdMetadata } from './json-ld-metadata'

const JSON_LD_KEY: keyof JsonLdMetadata = 'jsonLd'
const SCRIPT_TYPE = 'application/ld+json'

export const JSON_LD_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  JsonLdMetadata[typeof JSON_LD_KEY]
> =
  (headElementUpsertOrRemove: HeadElementUpsertOrRemove, doc: Document) =>
  (jsonLd) => {
    let scriptElement: HTMLScriptElement | undefined
    if (jsonLd !== null && jsonLd !== undefined) {
      scriptElement = doc.createElement('script')
      scriptElement.setAttribute('type', SCRIPT_TYPE)
      scriptElement.innerHTML = JSON.stringify(jsonLd)
    }
    headElementUpsertOrRemove(`script[type='${SCRIPT_TYPE}']`, scriptElement)
  }

export const JSON_LD_METADATA_PROVIDER = makeMetadataProviderFromSetterFactory(
  JSON_LD_METADATA_SETTER_FACTORY,
  {
    d: [HEAD_ELEMENT_UPSERT_OR_REMOVE, DOCUMENT],
    jP: [JSON_LD_KEY],
  },
)
