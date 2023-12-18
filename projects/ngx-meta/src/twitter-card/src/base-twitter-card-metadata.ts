import { GlobalMetadataKey, ScopedMetadata } from '@davidlj95/ngx-meta/core'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { TwitterCardMetadataRouteData } from './twitter-card-metadata-route-data'

export const SCOPE: keyof TwitterCardMetadataRouteData['meta'] = 'twitterCard'

export abstract class BaseTwitterCardMetadata<
  ScopeKey extends keyof TwitterCardMetadata,
> extends ScopedMetadata<TwitterCardMetadata, ScopeKey> {
  protected constructor(name: ScopeKey, global?: GlobalMetadataKey) {
    super(SCOPE, name, global)
  }
}
