import { GlobalMetadata, ScopedMetadata } from '@davidlj95/ngx-meta/core'
import { StandardMetadata } from './standard-metadata'
import { StandardMetadataRouteData } from './standard-metadata-route-data'

export const SCOPE: keyof StandardMetadataRouteData['meta'] = 'standard'

export abstract class BaseStandardMetadata<
  K extends keyof StandardMetadata,
> extends ScopedMetadata<StandardMetadata, K> {
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
