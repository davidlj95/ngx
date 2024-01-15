import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import {
  HEAD_ELEMENT_UPSERT_OR_REMOVE,
  HeadElementUpsertOrRemove,
} from '@davidlj95/ngx-meta/core'
import { DOCUMENT } from '@angular/common'

const KEY: keyof Standard = 'canonicalUrl'
const LINK_TAG = 'link'
const REL_ATTR = 'rel'
const CANONICAL_VAL = 'canonical'
const SELECTOR = `${LINK_TAG}[${REL_ATTR}='${CANONICAL_VAL}']`

export const STANDARD_CANONICAL_URL_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY, {
    g: KEY,
    s:
      (headElementUpsertOrRemove: HeadElementUpsertOrRemove, doc: Document) =>
      (value) => {
        let linkElement: HTMLLinkElement | undefined
        if (value !== null && value !== undefined) {
          linkElement = doc.createElement(LINK_TAG)
          linkElement.setAttribute(REL_ATTR, CANONICAL_VAL)
          linkElement.setAttribute('href', value.toString())
        }
        headElementUpsertOrRemove(SELECTOR, linkElement)
      },
    d: [HEAD_ELEMENT_UPSERT_OR_REMOVE, DOCUMENT],
  })
