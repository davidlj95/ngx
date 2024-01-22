import {
  GlobalMetadata,
  makeMetadataProviderFromSetterFactory,
  MetadataSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { Standard } from './standard'
import { StandardMetadata } from './standard-metadata'
import { makeStandardMetaDefinition } from './make-standard-meta-definition'

const STANDARD_KEY: keyof StandardMetadata = 'standard'

export const makeStandardMetadataProvider = <Key extends keyof Standard>(
  key: Key,
  opts: {
    // Standard metadata name. Defaults to key
    n?: string
    // Global key. Defaults to nothing
    g?: keyof GlobalMetadata
    // Setter factory. Defaults to setting the meta name to the given value.
    s?: MetadataSetterFactory<Standard[Key]>
    // Deps for the setter factory
    d?: FactoryProvider['deps']
  } = {},
): FactoryProvider =>
  makeMetadataProviderFromSetterFactory(
    opts.s ??
      ((metaService: NgxMetaMetaService) => (value: Standard[Key]) =>
        metaService.set(
          makeStandardMetaDefinition(opts.n ?? key),
          value as string,
        )),
    {
      d: opts.d ?? [NgxMetaMetaService],
      jP: [STANDARD_KEY, key],
      g: opts.g,
    },
  )
