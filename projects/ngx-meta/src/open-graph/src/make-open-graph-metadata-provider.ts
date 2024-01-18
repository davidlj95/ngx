import {
  GlobalMetadataKey,
  makeMetadata,
  MetadataSetterFactory,
  MetaService,
  provideMetadataFactory,
  StringKeyOf,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph } from './open-graph'
import { FactoryProvider } from '@angular/core'
import { OpenGraphMetadata } from './open-graph-metadata'
import { makeOpenGraphMetaProperty } from './make-open-graph-meta-property'

export const OPEN_GRAPH_KEY: keyof OpenGraphMetadata = 'openGraph'

export const makeOpenGraphMetadataProvider = <
  Key extends StringKeyOf<OpenGraph>,
>(
  key: Key,
  opts: {
    // Open Graph property name. Defaults to key
    p?: string
    // Global key. Defaults to nothing
    g?: GlobalMetadataKey
    // Setter factory. Defaults to setting the property to the given value.
    s?: MetadataSetterFactory<OpenGraph[typeof key]>
  } = {},
): FactoryProvider =>
  provideMetadataFactory(
    makeMetadata([OPEN_GRAPH_KEY, key], opts.g),
    opts.s ??
      ((metaService) => (value: OpenGraph[typeof key]) =>
        metaService.set(makeOpenGraphMetaProperty(opts.p ?? key), value)),
    [MetaService],
  )
