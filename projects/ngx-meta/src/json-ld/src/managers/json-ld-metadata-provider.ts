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
> = (headElementUpsertOrRemove: _HeadElementUpsertOrRemove) => (jsonLd) =>
  headElementUpsertOrRemove(`script[type='${SCRIPT_TYPE}']`, (doc) => {
    if (!_isDefined(jsonLd)) {
      return
    }
    const scriptElement = doc.createElement('script')
    scriptElement.setAttribute('type', SCRIPT_TYPE)
    scriptElement.innerHTML = JSON.stringify(jsonLd)
    return scriptElement
  })

/**
 * Manages the {@link JsonLdMetadata.jsonLd} metadata
 * @public
 */
export const JSON_LD_METADATA_PROVIDER =
  makeMetadataManagerProviderFromSetterFactory(
    JSON_LD_METADATA_SETTER_FACTORY,
    {
      d: [_headElementUpsertOrRemove()],
      jP: [KEY],
    },
  )
