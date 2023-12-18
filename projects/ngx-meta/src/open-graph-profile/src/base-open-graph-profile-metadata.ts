import {
  BaseScopedMetadata,
  GlobalMetadataKey,
  StringKeyOf,
} from '@davidlj95/ngx-meta/core'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphProfileMetadataRouteData } from './open-graph-profile-metadata-route-data'
import { OpenGraphMetadataRouteData } from '@davidlj95/ngx-meta/open-graph'

export const OG_SCOPE: keyof OpenGraphMetadataRouteData['meta'] = 'openGraph'
export const PROFILE_SCOPE: keyof OpenGraphProfileMetadataRouteData['meta']['openGraph'] =
  'profile'

export abstract class BaseOpenGraphProfileMetadata<
  ScopeKey extends StringKeyOf<OpenGraphProfileMetadata>,
> extends BaseScopedMetadata<OpenGraphProfileMetadata, ScopeKey> {
  protected constructor(name: ScopeKey, global?: GlobalMetadataKey) {
    super(`${OG_SCOPE}.${PROFILE_SCOPE}`, name, global)
  }
}
