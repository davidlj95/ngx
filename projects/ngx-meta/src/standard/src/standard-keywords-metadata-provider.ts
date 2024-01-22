import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import {
  MetadataSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { makeStandardMetaDefinition } from './make-standard-meta-definition'

const KEY: keyof Standard = 'keywords'

export const __STANDARD_KEYWORDS_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof KEY]
> = (metaService: NgxMetaMetaService) => (value) =>
  metaService.set(makeStandardMetaDefinition(KEY), value?.join(','))

export const STANDARD_KEYWORDS_METADATA_PROVIDER = makeStandardMetadataProvider(
  KEY,
  { s: __STANDARD_KEYWORDS_METADATA_SETTER_FACTORY },
)
