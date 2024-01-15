import { DOCUMENT } from '@angular/common'
import {
  GlobalMetadata,
  HEAD_ELEMENT_UPSERT_OR_REMOVE,
  HeadElementUpsertOrRemove,
  makeGlobalMetadata,
  MetadataSetterFactory,
  provideMetadataFactory,
} from '@davidlj95/ngx-meta/core'

const KEY: keyof GlobalMetadata = 'jsonLd'
const SCRIPT_TYPE = 'application/ld+json'

export const JSON_LD_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  GlobalMetadata[typeof KEY]
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

export const JSON_LD_METADATA_PROVIDER = provideMetadataFactory(
  makeGlobalMetadata('jsonLd'),
  JSON_LD_METADATA_SETTER_FACTORY,
  [HEAD_ELEMENT_UPSERT_OR_REMOVE, DOCUMENT],
)
