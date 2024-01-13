import { DOCUMENT } from '@angular/common'
import {
  GlobalMetadata,
  makeGlobalMetadata,
  MetadataSetterFactory,
  provideMetadataFactory,
} from '@davidlj95/ngx-meta/core'

const KEY: keyof GlobalMetadata = 'jsonLd'
const SCRIPT_TYPE = 'application/ld+json'

export const JSON_LD_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  GlobalMetadata[typeof KEY]
> = (document: Document) => (jsonLd) => {
  const existingScriptElement = document.head.querySelector(
    `script[type='${SCRIPT_TYPE}']`,
  )
  if (existingScriptElement) {
    document.head.removeChild(existingScriptElement)
  }

  if (jsonLd === null || jsonLd === undefined) {
    return
  }

  const scriptElement = document.createElement('script')
  scriptElement.setAttribute('type', SCRIPT_TYPE)
  scriptElement.innerHTML = JSON.stringify(jsonLd)
  document.head.appendChild(scriptElement)
}

export const JSON_LD_METADATA_PROVIDER = provideMetadataFactory(
  makeGlobalMetadata('jsonLd'),
  JSON_LD_METADATA_SETTER_FACTORY,
  [DOCUMENT],
)
