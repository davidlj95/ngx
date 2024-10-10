import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import { Standard } from '../types'
import {
  MetadataSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'

export const STANDARD_KEYWORDS_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof KEY]
> = (metaElementsService: NgxMetaElementsService) => (value) =>
  metaElementsService.set(
    withNameAttribute(KEY),
    withContentAttribute(value?.join(',')),
  )

const KEY = 'keywords' satisfies keyof Standard

/**
 * Manages the {@link Standard.keywords} metadata
 * @public
 */
export const STANDARD_KEYWORDS_METADATA_PROVIDER = makeStandardMetadataProvider(
  KEY,
  { s: STANDARD_KEYWORDS_METADATA_SETTER_FACTORY },
)
