import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import {
  MetadataSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { VERSION } from '@angular/core'
import { makeStandardMetaDefinition } from './make-standard-meta-definition'

/**
 * @internal
 */
export const __STANDARD_GENERATOR_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof KEY]
> = (metaService: NgxMetaMetaService) => (value) =>
  metaService.set(
    makeStandardMetaDefinition(KEY),
    value === true ? `Angular v${VERSION.full}` : value,
  )

/**
 * @internal
 */
const KEY = 'generator' satisfies keyof Standard

/**
 * Manages the {@link Standard.generator} metadata
 * @public
 */
export const STANDARD_GENERATOR_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY, {
    s: __STANDARD_GENERATOR_METADATA_SETTER_FACTORY,
  })
