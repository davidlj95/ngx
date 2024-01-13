import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import { MetadataSetterFactory, MetaService } from '@davidlj95/ngx-meta/core'
import { StandardMetaProperty } from './standard-meta-property'
import { VERSION } from '@angular/core'

const KEY: keyof Standard = 'generator'

export const STANDARD_GENERATOR_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof KEY]
> = (metaService: MetaService) => (value) =>
  metaService.set(
    new StandardMetaProperty(KEY),
    value === true ? `Angular v${VERSION.full}` : value,
  )

export const STANDARD_GENERATOR_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY, {
    s: STANDARD_GENERATOR_METADATA_SETTER_FACTORY,
  })
