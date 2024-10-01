import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import { Standard } from '../types'
import {
  MetadataSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { makeStandardMetaDefinition } from '../utils/make-standard-meta-definition'

export const STANDARD_KEYWORDS_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof KEY]
> = (metaService: NgxMetaMetaService) => (value) =>
  metaService.set(makeStandardMetaDefinition(KEY), value?.join(','))

const KEY = 'keywords' satisfies keyof Standard

/**
 * Manages the {@link Standard.keywords} metadata
 * @public
 */
export const STANDARD_KEYWORDS_METADATA_PROVIDER = makeStandardMetadataProvider(
  KEY,
  { s: STANDARD_KEYWORDS_METADATA_SETTER_FACTORY },
)
