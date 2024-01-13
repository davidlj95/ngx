import {
  MetaService,
  provideMetadataFactory,
  StringKeyOf,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { OpenGraphProfileMetadataDefinition } from './open-graph-profile-metadata-definition'
import { OpenGraphProfileMetaProperty } from './open-graph-profile-meta-property'
import { OpenGraphProfile } from './open-graph-profile'

export const makeOpenGraphProfileMetadataProvider = <
  Key extends StringKeyOf<OpenGraphProfile>,
>(
  key: Key,
  opts: {
    // Open Graph profile property name. Defaults to key
    p?: string
  } = {},
): FactoryProvider =>
  provideMetadataFactory(
    new OpenGraphProfileMetadataDefinition(key),
    (metaService) => (value: OpenGraphProfile[typeof key]) =>
      metaService.set(new OpenGraphProfileMetaProperty(opts.p ?? key), value),
    [MetaService],
  )
