import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import { Standard } from '../types'
import {
  MetadataSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import { VERSION } from '@angular/core'

export const STANDARD_GENERATOR_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof KEY]
> = (metaElementsService: NgxMetaElementsService) => (value) =>
  metaElementsService.set(
    withNameAttribute(KEY),
    withContentAttribute(value === true ? `Angular v${VERSION.full}` : value),
  )

const KEY = 'generator' satisfies keyof Standard

/**
 * Manages the {@link Standard.generator} metadata
 * @public
 */
export const STANDARD_GENERATOR_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY, {
    s: STANDARD_GENERATOR_METADATA_SETTER_FACTORY,
  })
