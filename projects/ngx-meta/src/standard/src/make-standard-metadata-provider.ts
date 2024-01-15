import {
  GlobalMetadataKey,
  makeMetadata,
  MetadataSetterFactory,
  MetaService,
  provideMetadataFactory,
  StringKeyOf,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { Standard } from './standard'
import { StandardMetadata } from './standard-metadata'
import { makeStandardMetaProperty } from './make-standard-meta-property'

const KEY: keyof StandardMetadata = 'standard'

export const makeStandardMetadataProvider = <Key extends StringKeyOf<Standard>>(
  key: Key,
  opts: {
    // Standard metadata name. Defaults to key
    n?: string
    // Global key. Defaults to nothing
    g?: GlobalMetadataKey
    // Setter factory. Defaults to setting the meta name to the given value.
    s?: MetadataSetterFactory<Standard[typeof key]>
    // Deps for the setter factory
    d?: FactoryProvider['deps']
  } = {},
): FactoryProvider =>
  provideMetadataFactory(
    makeMetadata([KEY, key], opts.g),
    opts.s ??
      ((metaService) => (value: Standard[typeof key]) =>
        metaService.set(makeStandardMetaProperty(opts.n ?? key), value)),
    opts.d ?? [MetaService],
  )
