import {
  makeMetadataManagerProviderFromSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { FactoryProvider } from '@angular/core'
import { OpenGraphProfile } from '../managers'
import { OPEN_GRAPH_KEY } from '../../utils/make-open-graph-metadata-provider'
import { OpenGraph } from '../../types'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'

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
    (metaElementsService: NgxMetaElementsService) =>
      (value: OpenGraphProfile[Key]) =>
        metaElementsService.set(
          withOpenGraphPropertyAttribute(OPEN_GRAPH_PROFILE_KEY, opts.p ?? key),
          withContentAttribute(value),
        ),
    {
      d: [NgxMetaElementsService],
      jP: [OPEN_GRAPH_KEY, OPEN_GRAPH_PROFILE_KEY, key],
    },
  )
