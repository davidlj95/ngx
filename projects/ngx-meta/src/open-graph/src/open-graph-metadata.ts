import { GlobalMetadata, ScopedMetadata } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetadataRouteData } from './open-graph-metadata-route-data'
import { OpenGraphMetadataValues } from './open-graph-metadata-values'

export const SCOPE: keyof OpenGraphMetadataRouteData = 'openGraph'

export abstract class OpenGraphMetadata<
  K extends keyof OpenGraphMetadataValues,
> extends ScopedMetadata<OpenGraphMetadataValues, K> {
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
