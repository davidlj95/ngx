import {
  GlobalMetadataKey,
  MetadataSetterFactory,
  MetaService,
  provideMetadataFactory,
  StringKeyOf,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph } from './open-graph'
import { FactoryProvider } from '@angular/core'
import { OpenGraphMetadataDefinition } from './open-graph-metadata-definition'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

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
    new OpenGraphMetadataDefinition(key, opts.g),
    opts.s ??
      ((metaService) => (value: OpenGraph[typeof key]) =>
        metaService.set(new OpenGraphMetaProperty(opts.p ?? key), value)),
    [MetaService],
  )
