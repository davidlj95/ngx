import { GlobalMetadata, ScopedMetadata } from '@davidlj95/ngx-meta/core'
import { TwitterCardMetadata } from './twitter-card-metadata'
import { TwitterCardMetadataRouteData } from './twitter-card-metadata-route-data'

export const SCOPE: keyof TwitterCardMetadataRouteData['meta'] = 'twitterCard'

export abstract class BaseTwitterCardMetadata<
  K extends keyof TwitterCardMetadata,
> extends ScopedMetadata<TwitterCardMetadata, K> {
  protected constructor({
    name,
    globalName,
  }: {
    name: K
    globalName?: keyof GlobalMetadata
  }) {
    super({ name, scope: SCOPE, globalName })
  }
}
