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
const _STANDARD_GENERATOR_KEY: keyof Standard = 'generator'

/**
 * @internal
 */
export const __STANDARD_GENERATOR_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof _STANDARD_GENERATOR_KEY]
> = (metaService: NgxMetaMetaService) => (value) =>
  metaService.set(
    makeStandardMetaDefinition(_STANDARD_GENERATOR_KEY),
    value === true ? `Angular v${VERSION.full}` : value,
  )

export const STANDARD_GENERATOR_METADATA_PROVIDER =
  makeStandardMetadataProvider(_STANDARD_GENERATOR_KEY, {
    s: __STANDARD_GENERATOR_METADATA_SETTER_FACTORY,
  })
