import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import { Standard } from '../types'
import {
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'

const KEY = 'keywords' satisfies keyof Standard

/**
 * Manages the {@link Standard.keywords} metadata
 * @public
 */
export const STANDARD_KEYWORDS_METADATA_PROVIDER = makeStandardMetadataProvider(
  KEY,
  {
    s: (metaElementsService: NgxMetaElementsService) => (value) =>
      metaElementsService.set(
        withNameAttribute(KEY),
        withContentAttribute(value?.join(',')),
      ),
  },
)
