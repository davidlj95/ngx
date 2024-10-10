import {
  GlobalMetadata,
  makeMetadataManagerProviderFromSetterFactory,
  MetadataSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { Standard, StandardMetadata } from '../types'

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
  makeMetadataManagerProviderFromSetterFactory(
    opts.s ??
      ((metaElementsService: NgxMetaElementsService) =>
        (value: Standard[Key]) =>
          metaElementsService.set(
            withNameAttribute(opts.n ?? key),
            withContentAttribute(value as string | null | undefined),
          )),
    {
      d: opts.d ?? [NgxMetaElementsService],
      jP: [STANDARD_KEY, key],
      g: opts.g,
    },
  )
