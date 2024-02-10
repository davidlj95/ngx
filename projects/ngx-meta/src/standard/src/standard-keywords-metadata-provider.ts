import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import {
  MetadataSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { makeStandardMetaDefinition } from './make-standard-meta-definition'

/**
 * @internal
 */
const _STANDARD_KEYWORDS_KEY: keyof Standard = 'keywords'

/**
 * @internal
 */
export const __STANDARD_KEYWORDS_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof _STANDARD_KEYWORDS_KEY]
> = (metaService: NgxMetaMetaService) => (value) =>
  metaService.set(
    makeStandardMetaDefinition(_STANDARD_KEYWORDS_KEY),
    value?.join(','),
  )

export const STANDARD_KEYWORDS_METADATA_PROVIDER = makeStandardMetadataProvider(
  _STANDARD_KEYWORDS_KEY,
  { s: __STANDARD_KEYWORDS_METADATA_SETTER_FACTORY },
)
