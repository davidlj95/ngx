import {
  makeMetadataManagerProviderFromSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { OpenGraphProfile } from '../managers'
import { OPEN_GRAPH_KEY } from '../../utils/make-open-graph-metadata-provider'
import { makeOpenGraphMetaDefinition } from '../../utils/make-open-graph-meta-definition'
import { OpenGraph } from '../../basic-optional'

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
  makeMetadataManagerProviderFromSetterFactory(
    (metaService: NgxMetaMetaService) => (value: OpenGraphProfile[Key]) =>
      metaService.set(
        makeOpenGraphMetaDefinition(...[OPEN_GRAPH_PROFILE_KEY, opts.p ?? key]),
        value,
      ),
    {
      d: [NgxMetaMetaService],
      jP: [OPEN_GRAPH_KEY, OPEN_GRAPH_PROFILE_KEY, key],
    },
  )
