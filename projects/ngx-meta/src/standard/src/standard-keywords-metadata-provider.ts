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
export const __STANDARD_KEYWORDS_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof KEY]
> = (metaService: NgxMetaMetaService) => (value) =>
  metaService.set(makeStandardMetaDefinition(KEY), value?.join(','))

/**
 * @internal
 */
const KEY = 'keywords' satisfies keyof Standard

/**
 * Manages the {@link Standard.keywords} metadata
 * @public
 */
export const STANDARD_KEYWORDS_METADATA_PROVIDER = makeStandardMetadataProvider(
  KEY,
  { s: __STANDARD_KEYWORDS_METADATA_SETTER_FACTORY },
)
