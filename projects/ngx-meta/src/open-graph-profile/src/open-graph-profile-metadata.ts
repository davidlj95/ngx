import { GlobalMetadata, ScopedMetadata } from '@davidlj95/ngx-meta/core'
import { OpenGraphProfileMetadataValues } from './open-graph-profile-metadata-values'
import { OpenGraphProfileMetadataRouteData } from './open-graph-profile-metadata-route-data'

export const OG_SCOPE: keyof OpenGraphProfileMetadataRouteData = 'openGraph'
export const PROFILE_SCOPE: keyof OpenGraphProfileMetadataRouteData['openGraph'] =
  'profile'

export abstract class OpenGraphProfileMetadata<
  K extends keyof OpenGraphProfileMetadataValues,
> extends ScopedMetadata<OpenGraphProfileMetadataValues, K> {
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
