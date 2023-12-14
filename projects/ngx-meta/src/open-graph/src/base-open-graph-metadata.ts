import { GlobalMetadata, ScopedMetadata } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetadataRouteData } from './open-graph-metadata-route-data'
import { OpenGraphMetadata } from './open-graph-metadata'

export const SCOPE: keyof OpenGraphMetadataRouteData['meta'] = 'openGraph'

export abstract class BaseOpenGraphMetadata<
  K extends keyof OpenGraphMetadata,
> extends ScopedMetadata<OpenGraphMetadata, K> {
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
