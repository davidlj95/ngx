import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import {
  _HEAD_ELEMENT_UPSERT_OR_REMOVE,
  _HeadElementUpsertOrRemove,
  GLOBAL_CANONICAL_URL,
} from '@davidlj95/ngx-meta/core'
import { DOCUMENT } from '@angular/common'

const LINK_TAG = 'link'
const REL_ATTR = 'rel'
const CANONICAL_VAL = 'canonical'
const SELECTOR = `${LINK_TAG}[${REL_ATTR}='${CANONICAL_VAL}']`

export const STANDARD_CANONICAL_URL_METADATA_PROVIDER =
  makeStandardMetadataProvider(GLOBAL_CANONICAL_URL, {
    g: GLOBAL_CANONICAL_URL,
    s:
      (headElementUpsertOrRemove: _HeadElementUpsertOrRemove, doc: Document) =>
      (value) => {
        let linkElement: HTMLLinkElement | undefined
        if (value !== null && value !== undefined) {
          linkElement = doc.createElement(LINK_TAG)
          linkElement.setAttribute(REL_ATTR, CANONICAL_VAL)
          linkElement.setAttribute('href', value.toString())
        }
        headElementUpsertOrRemove(SELECTOR, linkElement)
      },
    d: [_HEAD_ELEMENT_UPSERT_OR_REMOVE, DOCUMENT],
  })
