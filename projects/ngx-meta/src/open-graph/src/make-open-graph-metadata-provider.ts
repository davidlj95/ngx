import {
  GlobalMetadata,
  makeMetadataManagerProviderFromSetterFactory,
  MetadataResolverOptions,
  MetadataSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph } from './open-graph'
import { FactoryProvider } from '@angular/core'
import { OpenGraphMetadata } from './open-graph-metadata'
import { makeOpenGraphMetaDefinition } from './make-open-graph-meta-definition'

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
  } = {},
): FactoryProvider =>
  makeMetadataManagerProviderFromSetterFactory(
    opts.s ??
      ((metaService: NgxMetaMetaService) => (value: OpenGraph[Key]) =>
        metaService.set(
          makeOpenGraphMetaDefinition(opts.p ?? key),
          value as string,
        )),
    {
      d: [NgxMetaMetaService],
      jP: [OPEN_GRAPH_KEY, key],
      g: opts.g,
      m: opts.m,
    },
  )
