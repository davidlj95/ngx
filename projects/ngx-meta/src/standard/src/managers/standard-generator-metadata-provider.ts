import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import { Standard } from '../types'
import {
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import { VERSION } from '@angular/core'

const KEY = 'generator' satisfies keyof Standard

/**
 * Manages the {@link Standard.generator} metadata
 * @public
 */
export const STANDARD_GENERATOR_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY, {
    s: (metaElementsService: NgxMetaElementsService) => (value) =>
      metaElementsService.set(
        withNameAttribute(KEY),
        withContentAttribute(
          value === true ? `Angular v${VERSION.full}` : value,
        ),
      ),
  })
