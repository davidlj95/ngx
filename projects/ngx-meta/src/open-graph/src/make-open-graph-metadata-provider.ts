import {
  GlobalMetadata,
  MetadataSetterFactory,
  MetaService,
  provideMetadataFactory,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph } from './open-graph'
import { FactoryProvider } from '@angular/core'
import { OpenGraphMetadata } from './open-graph-metadata'
import { makeOpenGraphMetaProperty } from './make-open-graph-meta-property'

export const OPEN_GRAPH_KEY: keyof OpenGraphMetadata = 'openGraph'

export const makeOpenGraphMetadataProvider = <Key extends keyof OpenGraph>(
  key: Key,
  opts: {
    // Open Graph property name. Defaults to key
    p?: string
    // Global key. Defaults to nothing
    g?: keyof GlobalMetadata
    // Setter factory. Defaults to setting the property to the given value.
    s?: MetadataSetterFactory<OpenGraph[typeof key]>
  } = {},
): FactoryProvider =>
  provideMetadataFactory(
    opts.s ??
      ((metaService) => (value: OpenGraph[typeof key]) =>
        metaService.set(makeOpenGraphMetaProperty(opts.p ?? key), value)),
    {
      d: [MetaService],
      jP: [OPEN_GRAPH_KEY, key],
      g: opts.g,
    },
  )
