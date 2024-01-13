import {
  makeMetadata,
  MetaService,
  provideMetadataFactory,
  StringKeyOf,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { OpenGraphProfileMetaProperty } from './open-graph-profile-meta-property'
import { OpenGraphProfile } from './open-graph-profile'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'

const OG_KEY: keyof OpenGraphProfileMetadata = 'openGraph'
const KEY: keyof OpenGraphProfileMetadata[typeof OG_KEY] = 'profile'

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
    makeMetadata([OG_KEY, KEY, key]),
    (metaService) => (value: OpenGraphProfile[typeof key]) =>
      metaService.set(new OpenGraphProfileMetaProperty(opts.p ?? key), value),
    [MetaService],
  )
