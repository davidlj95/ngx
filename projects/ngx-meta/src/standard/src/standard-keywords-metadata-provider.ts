import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import { MetadataSetterFactory, MetaService } from '@davidlj95/ngx-meta/core'
import { makeStandardMetaProperty } from './make-standard-meta-property'

const KEY: keyof Standard = 'keywords'

export const STANDARD_KEYWORDS_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof KEY]
> = (metaService: MetaService) => (value) =>
  metaService.set(makeStandardMetaProperty(KEY), value?.join(','))

export const STANDARD_KEYWORDS_METADATA_PROVIDER = makeStandardMetadataProvider(
  KEY,
  { s: STANDARD_KEYWORDS_METADATA_SETTER_FACTORY },
)
