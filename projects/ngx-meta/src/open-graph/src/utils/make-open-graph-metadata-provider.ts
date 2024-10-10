import {
  GlobalMetadata,
  makeMetadataManagerProviderFromSetterFactory,
  MetadataResolverOptions,
  MetadataSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { OpenGraph, OpenGraphMetadata } from '../types'
import { withOpenGraphPropertyAttribute } from './with-open-graph-property-attribute'

export const OPEN_GRAPH_KEY: keyof OpenGraphMetadata = 'openGraph'

export const makeOpenGraphMetadataProvider = <Key extends keyof OpenGraph>(
  key: Key,
  opts: {
    // Open Graph property name. Defaults to key
    p?: string
    // Global key. Defaults to nothing
    g?: keyof GlobalMetadata
    // Setter factory. Defaults to setting the property to the given value.
    s?: MetadataSetterFactory<OpenGraph[Key]>
    // Object merging. Defaults to false
    m?: MetadataResolverOptions['objectMerge']
    // Deps for the setter factory
    d?: FactoryProvider['deps']
  } = {},
): FactoryProvider =>
  makeMetadataManagerProviderFromSetterFactory(
    opts.s ??
      ((metaElementsService: NgxMetaElementsService) =>
        (value: OpenGraph[Key]) =>
          metaElementsService.set(
            withOpenGraphPropertyAttribute(opts.p ?? key),
            withContentAttribute(value as string | null | undefined),
          )),
    {
      d: opts.d ?? [NgxMetaElementsService],
      jP: [OPEN_GRAPH_KEY, key],
      g: opts.g,
      m: opts.m,
    },
  )
