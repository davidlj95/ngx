import { GlobalMetadata, ScopedMetadata } from '@davidlj95/ngx-meta/core'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphProfileMetadataRouteData } from './open-graph-profile-metadata-route-data'

export const OG_SCOPE: keyof OpenGraphProfileMetadataRouteData = 'openGraph'
export const PROFILE_SCOPE: keyof OpenGraphProfileMetadataRouteData['openGraph'] =
  'profile'

export abstract class BaseOpenGraphProfileMetadata<
  K extends keyof OpenGraphProfileMetadata,
> extends ScopedMetadata<OpenGraphProfileMetadata, K> {
  protected constructor({
    name,
    globalName,
  }: {
    name: K
    globalName?: keyof GlobalMetadata
  }) {
    super({ name, scope: `${OG_SCOPE}.${PROFILE_SCOPE}`, globalName })
  }
}
