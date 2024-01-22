import {
  makeMetadataProviderFromSetterFactory,
  MetaService,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { OpenGraphProfile } from './open-graph-profile'
import { OPEN_GRAPH_KEY } from './make-open-graph-metadata-provider'
import { makeOpenGraphMetaProperty } from './make-open-graph-meta-property'
import { OpenGraph } from './open-graph'

export const OPEN_GRAPH_PROFILE_KEY: keyof OpenGraph = 'profile'

export const makeOpenGraphProfileMetadataProvider = <
  Key extends keyof OpenGraphProfile,
>(
  key: Key,
  opts: {
    // Open Graph profile property name. Defaults to key
    p?: string
  } = {},
): FactoryProvider =>
  makeMetadataProviderFromSetterFactory(
    (metaService) => (value: OpenGraphProfile[typeof key]) =>
      metaService.set(
        makeOpenGraphMetaProperty(...[OPEN_GRAPH_PROFILE_KEY, opts.p ?? key]),
        value,
      ),
    {
      d: [MetaService],
      jP: [OPEN_GRAPH_KEY, OPEN_GRAPH_PROFILE_KEY, key],
    },
  )
